const greet = require("../app");

// boolean, string, number
var x = false;
var a = {};
var b = {};

describe("check that the variable is true", () => {
  it("The function greet ", () => {
    expect(greet("Platzi")).toContain("Hi");
  });

  it("X is true", () => {
    expect(x).toBe(false);
    expect(x).toEqual(false);
  });

  it("Objects equals", () => {
    expect(a).toEqual(b);
  });
});
