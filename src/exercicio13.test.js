function letterEandI(string) {
  if (string.includes("e") && string.includes("i")) {
    return "contains 'e' and 'i'";
  }
  if (string.includes("e")) {
    return "contains 'e'";
  }
  if (string.includes("i")) {
    return "contains 'i'";
  } else {
    return "no contains 'e' and 'i'";
  }
}
it("word contains 'e' and 'i'", () => {
  expect(letterEandI("jaqueline")).toBe("contains 'e' and 'i'");
  expect(letterEandI("street")).toBe("contains 'e'");
  expect(letterEandI("blind")).toBe("contains 'i'");
  expect(letterEandI("cup")).toBe("no contains 'e' and 'i'");
});
