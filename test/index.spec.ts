import * as Index from '../index';
import Streamer from '../src/streamer';

test('index exports', () => {
    expect(Index.Streamer).toBe(Streamer);
});

test('index scope', () => {
    expect(Object.keys(Index).sort()).toEqual([
        'Streamer',
    ].sort())
});
