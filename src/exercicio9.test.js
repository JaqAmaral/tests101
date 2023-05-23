function zeroAndTen(n) {
  if (n <= 10) {
    return "between 0 and 10";
  } else {
    return "is not between 0 and 10";
  }
}
it("should be number between 0 and 10", () => {
  expect(zeroAndTen(10)).toBe("between 0 and 10");
  expect(zeroAndTen(20)).toBe("is not between 0 and 10");
});
