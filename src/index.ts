import { merge } from "./merge";

export { merge };

if (require.main === module) {
  const collection_1 = [1, 3, 5, 7];
  const collection_2 = [8, 6, 4, 2];
  const collection_3 = [0, 9, 10];

  console.log(merge(collection_1, collection_2, collection_3));
}
