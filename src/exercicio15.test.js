function letterOorU(word) {
  if (word.includes("o") || word.includes("u")) {
    return "contains 'o' or 'u'";
  } else {
    return "no contains 'o' or 'u'";
  }
}
it("word contains 'o' or 'u'", () => {
  expect(letterOorU("blue")).toBe("contains 'o' or 'u'");
  expect(letterOorU("Son")).toBe("contains 'o' or 'u'");
  expect(letterOorU("big")).toBe("no contains 'o' or 'u'");
});
