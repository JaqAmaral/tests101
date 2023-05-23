function allIndexOf(word, character) {
  let indexes = [];
  console.log(indexes, indexes.length);
  for (let i = 0; i < word.length; i++) {
    if (word[i] === character) {
      indexes[indexes.length] = i;
    }
    console.log(indexes, indexes.length, word[i]);
  }
  return indexes;
}
it("should return all ocurrences of a character", () => {
  let word = "cachorro";

  //expect(allIndexOf(word, "c")).toEqual([0, 2]);
  //   expect(allIndexOf(word, "a")).toEqual([1]);
  //   expect(allIndexOf(word, "h")).toEqual([3]);
  expect(allIndexOf(word, "o")).toEqual([4, 7]);
  //   expect(allIndexOf(word, "r")).toEqual([5, 6]);
  //   expect(allIndexOf(word, "y")).toEqual([]);
});
