function perfectSquare(num) {}
it("it's perfect square", () => {
  expect(perfectSquare(9)).toBe("perfect square");
  expect(perfectSquare(10)).toBe("no perfect square");
});
