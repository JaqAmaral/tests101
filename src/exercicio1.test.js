function numberLargest(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
it("which is the largest", () => {
  expect(numberLargest(10, 20)).toBe(20);
  expect(numberLargest(12, 15)).toBe(15);
});
