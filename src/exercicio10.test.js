function wordA(string) {
  if (string.includes("a")) {
    return "count 'a'";
  } else {
    return "not count 'a'";
  }
}
it("word that contains letter a", () => {
  expect(wordA("airport")).toBe("count 'a'");
  expect(wordA("end")).toBe("not count 'a'");
});
