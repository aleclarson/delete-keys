var deleteKeys;

deleteKeys = require("../src/deleteKeys");

describe("deleteKeys(obj, keys)", function() {
  return it("deletes the specified keys", function() {
    var obj;
    obj = {
      a: 1,
      b: 2,
      c: 3
    };
    deleteKeys(obj, ["a", "c"]);
    expect(obj.hasOwnProperty("a")).toBe(false);
    expect(obj.hasOwnProperty("b")).toBe(true);
    return expect(obj.hasOwnProperty("c")).toBe(false);
  });
});

//# sourceMappingURL=../../map/spec/deleteKeys.map
