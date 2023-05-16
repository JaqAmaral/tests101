function multiplyBy3(y) {
  //let x = 0;
  for (let i = 1; i <= y; i++) {
    if (i * 3 === y) {
      return "multiply by 3";
    }
  }
  return "not multiply by 3";
}
/* if (y % 3 === 0) {
    return "multiply by 3";
  } else {
    return "not multiply by 3";
  }*/
it("should multiply by 3", () => {
  expect(multiplyBy3(9)).toBe("multiply by 3");
  expect(multiplyBy3(10)).toBe("not multiply by 3");
});
