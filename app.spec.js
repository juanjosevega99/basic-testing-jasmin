const it = require("./framework").it;
const expect = require("./framework").expect;
const greet = require("./app");

console.log(greet("Platzi"));

it("The function greet ", () => {
  expect(greet("Platzi")).toBe("Hi Platzi");
});
