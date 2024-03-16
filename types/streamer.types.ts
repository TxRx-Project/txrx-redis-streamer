/**
 * Details of the stream utilized on the XADD command.
 */
export type StreamProfile = {
    /**
     * The stream name.
     */
    stream: string;    
    /**
     * Number of elements to trim the stream on XADD.
     */
    maxlen: number;
};

/**
 * A simple string based key/value data structure.
 */
export type Payload = {
    [key:string]: string;
}

/**
 * Represents what and where to stream.
 */
export type Streamable = StreamProfile & {
    /**
     * The string to string mapping to be streamed as the message payload.
     */
    payload: Payload
};

/**
 * A proxy symbol for the for {@link StreamProfile}.
 */
export const StreamProfile = Symbol('StreamProfile');

/**
 * A proxy symbol for the for {@link Payload}.
 */
export const Payload = Symbol('Payload');

/**
 * A proxy symbol for the for {@link Streamable}.
 */
export const Streamable = Symbol('Streamable');
