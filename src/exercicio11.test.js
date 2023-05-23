function divisible3And5(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "divisible by 3 and by 5";
  }
  if (num % 3 === 0) {
    return "divisible by 3";
  }
  if (num % 5 === 0) {
    return "divisible by 5";
  }
  return "no divisible by 3 and by 5";
}
it("number is divisible by 3 and by 5", () => {
  expect(divisible3And5(15)).toBe("divisible by 3 and by 5");
  expect(divisible3And5(9)).toBe("divisible by 3");
  expect(divisible3And5(25)).toBe("divisible by 5");
});
