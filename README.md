# txrx-redis-streamer

A `Redis` streamer implementation.

## Synopsis

A simple class that issues `XADD` commands.

### Streamable

This type defines the item to be streamed.

- **maxlen** - defines the `MAXLEN` of the stream
- **payload** - a simple string to string mapping, containing all the data attached to the message to be streamed.

### Usage

```typescript
const streamer = new Streamer('redis://127.0.0.1:6379');

(async() {
    await streamer.stream({
        stream: 'MY_STREAM',
        number: 100000,
        paylod: {
            a: JSON.stringify({
                b: 1,
                c: 'test',
                d: {
                    e: 'f',
                },
            }),
            g: 'h',
        }
    });
})();
```

## Devel

Dev container is recommended, to run the `devel` container:

```bash
make build
make install
```

### CI

The workflow runs:

```bash
make test
```

Or separately:

#### Tests

```bash
make jest
```

#### Linter

```bash
make syntax
```

