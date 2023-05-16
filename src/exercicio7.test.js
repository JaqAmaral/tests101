function receiveNumber(number) {
  if (number % 2 == 0 && number > 0) {
    return "par e positivo";
  } else if (number % 2 == 0 && number < 0) {
    return "par e negativo";
  } else if (number % 2 !== 0 && number > 0) {
    return "ímpar e positivo";
  } else if (number % 2 !== 0 && number < 0) {
    return "ímpar e negativo";
  }
}
it("should be even or odd and positive or negative", () => {
  expect(receiveNumber(14)).toBe("par e positivo");
  expect(receiveNumber(-2)).toBe("par e negativo");
  expect(receiveNumber(19)).toBe("ímpar e positivo");
  expect(receiveNumber(-5)).toBe("ímpar e negativo");
});
