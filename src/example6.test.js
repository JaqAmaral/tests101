function indexOf(word, character) {
  for (let i = word.length - 1; i > -1; i--) {
    if (word[i] === character) {
      return i;
    }
  }
  return -1;
}
it("should return the index of a character if it exists", () => {
  let word = "cachorro";
  expect(indexOf(word, "c")).toBe(2);
  expect(indexOf(word, "a")).toBe(1);
  expect(indexOf(word, "h")).toBe(3);
  expect(indexOf(word, "o")).toBe(7);
  expect(indexOf(word, "r")).toBe(6);
  expect(indexOf(word, "y")).toBe(-1);
});
