const greet = require("../app");

it("The function greet ", () => {
  expect(greet("Platzi")).toBe("Hi Platzi");
});
