var stringUtil = require("../stringUtils.js");

describe("stringUtil", function() {
  describe("firstWord", function() {
    it("should return the first word of a string", function () {
      expect(stringUtil.firstWord("one two")).toBe("one");
    });
  });

  describe("nthWord", function() {
    it("should return the nth word of a string", function () {
      expect(stringUtil.nthWord("one two", 1)).toBe("one");
      expect(stringUtil.nthWord("one two", 2)).toBe("two");
    });
  });
});
