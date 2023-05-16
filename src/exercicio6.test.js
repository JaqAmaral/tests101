function equalDifferent(a, b) {
  if (a === b) {
    return "equal";
  } else {
    return "different";
  }
}

it("it's equal or different", () => {
  expect(equalDifferent(10, 10)).toBe("equal");
  expect(equalDifferent(12, 15)).toBe("different");
});
