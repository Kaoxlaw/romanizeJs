const romanize = require("./romanize");

//check numbers
test("Romanize 4 to be VI", () => {
  expect(romanize(4)).toBe("IV");
});

test("Romanize 5 not to be VI", () => {
  expect(romanize(5)).not.toBe("IV");
});

//check string
test("Romanize NaN equal to isNan", () => {
  expect(romanize("Hello")).toMatch("Hello is not a number")
})
