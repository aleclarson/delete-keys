
deleteKeys = require "../src/deleteKeys"

describe "deleteKeys(obj, keys)", ->

  it "deletes the specified keys", ->
    obj = a: 1, b: 2, c: 3
    deleteKeys obj, ["a", "c"]
    expect(obj.hasOwnProperty "a").toBe no
    expect(obj.hasOwnProperty "b").toBe yes
    expect(obj.hasOwnProperty "c").toBe no
