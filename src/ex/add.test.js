import add from "./add";

describe("add", () => {
  const params = [[1, 2, 3], [2, 2, 4]];
  params.forEach(([a, b, r]) => {
    test("should add 1 to 2 properly", () => {
      const result = add(a, b);
      expect(result).toEqual(r);
    });
  });
});
