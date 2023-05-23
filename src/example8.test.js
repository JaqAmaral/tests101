function addArray(number) {
  let r = [];
  for (let i = 0; i < number; i++) {
    r[i] = i + 1;
  }
  return r;
}
it("should return on array of size ", () => {
  expect(addArray(4)).toEqual([1, 2, 3, 4]);
  expect(addArray(3)).toEqual([1, 2, 3]);
  expect(addArray(2)).toEqual([1, 2]);
  expect(addArray(1)).toEqual([1]);
  expect(addArray(0)).toEqual([]);
});
