import isBaseSize from ".";

describe("Base size matcher", () => {
  describe("when category is size and type is base", () => {
    it("should match", () => {
      const actual = isBaseSize({
        attributes: {
          category: "size",
          type: "base",
        },
      });

      expect(actual).toBe(true);
    });
  });
  describe("when style property (subitem) is letterSpacing", () => {
    it("should match", () => {
      const actual = isBaseSize({
        attributes: {
          category: "component",
          item: "headline1",
          subitem: "letterSpacing",
          type: "type",
        },
      });

      expect(actual).toBe(true);
    });
  });
});
