function startVowel(string) {
  const firstLetter = string.charAt(0);
  const vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(firstLetter)) {
    return "começa com a vogal";
  } else {
    return "não começa com a vogal";
  }
}
it("start with the vowel", () => {
  expect(startVowel("unha")).toBe("começa com a vogal");
  expect(startVowel("batata")).toBe("não começa com a vogal");
});
