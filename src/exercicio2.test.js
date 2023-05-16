function evenOrOdd(number) {
  if (number % 2 === 0) {
    return "par";
  } else {
    return "impar";
  }
  return number;
}
it("Even or Odd", () => {
  expect(evenOrOdd(2)).toBe("par");
  expect(evenOrOdd(5)).toBe("impar");
});
