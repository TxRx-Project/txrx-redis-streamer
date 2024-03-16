import * as Index from '../index';
import Streamer from '../src/streamer';
import * as Types from '../types/streamer.types';

test('index exports', () => {
    expect(Index.Streamer).toBe(Streamer);
    expect(Index.StreamProfile).toBe(Types.StreamProfile);
    expect(Index.Streamable).toBe(Types.Streamable);
    expect(Index.Payload).toBe(Types.Payload);
});

test('index scope', () => {
    expect(Object.keys(Index).sort()).toEqual([
        'Streamer',
        'Streamable',
        'StreamProfile',
        'Payload',
    ].sort())
});
