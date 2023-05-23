function positiveNegative(x, y) {
  if (x >= 0 && y >= 0) {
    return "both positive";
  }
  if (x < 0 && y < 0) {
    return "both negative";
  }
  if (x >= 0 && y < 0) {
    return "positive and negative";
  }
}
it("which numbers are positive/negative", () => {
  expect(positiveNegative(10, 14)).toBe("both positive");
  expect(positiveNegative(-1, -5)).toBe("both negative");
  expect(positiveNegative(3, -2)).toBe("positive and negative");
});
