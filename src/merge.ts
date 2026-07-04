export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  const result: number[] = [];

  let pointer1 = 0;
  let pointer2 = collection_2.length - 1;
  let pointer3 = 0;

  while (
    pointer1 < collection_1.length ||
    pointer2 >= 0 ||
    pointer3 < collection_3.length
  ) {
    const value1 =
      pointer1 < collection_1.length ? collection_1[pointer1] : Infinity;
    const value2 = pointer2 >= 0 ? collection_2[pointer2] : Infinity;
    const value3 =
      pointer3 < collection_3.length ? collection_3[pointer3] : Infinity;

    if (value1 <= value2 && value1 <= value3) {
      result.push(value1);
      pointer1 += 1;
    } else if (value2 <= value1 && value2 <= value3) {
      result.push(value2);
      pointer2 -= 1;
    } else {
      result.push(value3);
      pointer3 += 1;
    }
  }

  return result;
}
