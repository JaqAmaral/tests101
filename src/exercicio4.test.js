function positiveNegative(number) {
  if (number > 0) {
    return "positive";
  }
  if (number < 0) {
    return "negative";
  }
  if (number == 0) {
    return "zero";
  }
  return number;
}
it("should be positive or negative", () => {
  expect(positiveNegative(14)).toBe("positive");
  expect(positiveNegative(-2)).toBe("negative");
  expect(positiveNegative(0)).toBe("zero");
});
