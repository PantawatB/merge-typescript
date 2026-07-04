# merge-typescript

TypeScript implementation of:

```ts
merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[]
```

The function returns one sorted ascending array.

- `collection_1` is already sorted ascending.
- `collection_2` is already sorted descending.
- `collection_3` is already sorted ascending.
- No JavaScript/TypeScript `sort()` function is used.

## Requirements

- Node.js 20 or newer
- npm

## Setup

```bash
npm install
```

## Run Unit Tests

```bash
npm test
```

## Build

```bash
npm run build
```

## Execute Example Code

```bash
npm run build
npm start
```

Example output:

```text
[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
```

## Usage

```ts
import { merge } from "./merge";

const result = merge([1, 3, 5], [6, 4, 2], [0, 7, 8]);

console.log(result);
// [0, 1, 2, 3, 4, 5, 6, 7, 8]
```

## Approach

The implementation uses three pointers:

- one pointer starts at the beginning of `collection_1`
- one pointer starts at the end of `collection_2`, because that is where its smallest value is
- one pointer starts at the beginning of `collection_3`

At each step, it appends the smallest current value to the result and advances only that value's pointer.

Time complexity: `O(n)`

Space complexity: `O(n)` for the returned array
