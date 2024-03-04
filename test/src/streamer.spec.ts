import redisMock from 'ioredis-mock';
import Streamer from '../../src/streamer';
import { Streamable } from '../../types/streamer.types';

const redis = new redisMock();

jest.mock('ioredis', () => {
    return function () {
        return redis;
    };
});

let xaddArgs = [];
let xaddResolve = Date.now() + '-0';

describe('The Streamer class', () => {
    const streamer = new Streamer('redis://localhost:6379');

    beforeAll(() => {
        jest.spyOn(redis, 'xadd').mockImplementation(async (...args: any) => {
            xaddArgs = args;
            return xaddResolve;
        });
    });

    it('can stream the streamable', async() => {
        const streamable: Streamable = {
            stream: 'MY_STREAM',
            payload: {
                a: JSON.stringify([1, 2, null]),
                b: 'c',
            },
            maxlen: 100_000,
        };

        await expect(streamer.stream(streamable)).resolves.toBe(xaddResolve);

        expect(xaddArgs).toEqual(
            ['MY_STREAM', 'MAXLEN', '~', 100_000, '*', ...Object.keys(streamable.payload).map(k => [k, streamable.payload[k]]).flat()]
        );
    });
});