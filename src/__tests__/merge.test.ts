import { merge } from "../merge";

describe("merge", () => {
  it("merges three sorted collections into ascending order", () => {
    expect(merge([1, 3, 5], [6, 4, 2], [0, 7, 8])).toEqual([
      0, 1, 2, 3, 4, 5, 6, 7, 8
    ]);
  });

  it("handles duplicate values", () => {
    expect(merge([0, 2, 2], [3, 2, 1], [2, 4])).toEqual([
      0, 1, 2, 2, 2, 2, 3, 4
    ]);
  });

  it("handles empty collections", () => {
    expect(merge([], [], [])).toEqual([]);
    expect(merge([1, 3], [], [2])).toEqual([1, 2, 3]);
    expect(merge([], [5, 4, 1], [])).toEqual([1, 4, 5]);
  });

  it("does not mutate the input collections", () => {
    const collection_1 = [1, 4];
    const collection_2 = [5, 3, 2];
    const collection_3 = [0, 6];

    merge(collection_1, collection_2, collection_3);

    expect(collection_1).toEqual([1, 4]);
    expect(collection_2).toEqual([5, 3, 2]);
    expect(collection_3).toEqual([0, 6]);
  });

  it("works with negative numbers too", () => {
    expect(merge([-5, -1, 2], [4, 0, -3], [-4, 3])).toEqual([
      -5, -4, -3, -1, 0, 2, 3, 4
    ]);
  });
});
