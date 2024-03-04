import { RedisConnector } from '@txrx/redis-pool';
import { Streamable } from './../types/streamer.types';
import { Redis } from "ioredis";

/**
 * A Redis streamer implementation.
 * 
 * Support the following Redis commands:
 * 
 * - XADD
 *
 * The message to be streamed is defined as the {@link Streamable} type.
 */
export default class Streamer {
    /**
     * The internal {@link Redis} instance.
     */
    private redis: Redis;

    /**
     * The Streamer constructor.
     *
     * @param url - a Redis connection string
     */
    constructor(private url: string) {
        this.redis = RedisConnector.get('streamer').get(this.url);
    }

    /**
     * Streams a new message.
     * 
     * @param what - a {@link Streamable} that specifies what and where to stream.
     * @returns a Promise which resolves into the id of the new message
     */
    public async stream(what: Streamable): Promise<string | null> {
        return this.redis.xadd(what.stream, 'MAXLEN', '~', what.maxlen, '*', ...Object.keys(what.payload).map((k) => {
            return [k, what.payload[k]]
        }).flat());
    }
}
