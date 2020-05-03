function expect(actual) {
  return {
    toBe(expect) {
      if (actual !== expect) {
        throw new Error("Unsuccessful test");
      }
    },
  };
}

function it(title, callback) {
  try {
    callback();
    console.log(`✔ ${title}`);
  } catch (error) {
    console.error(`× ${title}`);
  }
}

module.exports = {
  expect,
  it
};
