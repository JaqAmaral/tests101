function primeNumber(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return "no prime number";
    }
  }
  return "prime number";
}
it("which number is prime", () => {
  expect(primeNumber(29)).toBe("prime number");
  expect(primeNumber(86)).toBe("no prime number");
});
