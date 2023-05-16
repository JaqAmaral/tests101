function stringLength(str) {
  if (str.length > 10) {
    return "longa";
  } else {
    return "curta";
  }
}
it("should string long ou short", () => {
  expect(stringLength("information")).toBe("longa");
  expect(stringLength("university")).toBe("curta");
});
