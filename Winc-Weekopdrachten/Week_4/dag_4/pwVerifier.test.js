//ophalen export
const functions = require("./pwVerifier.js");

//splitsen van alle validator functies in variabelen
const {
  isLessThan8Chars,
  isNotBlank,
  hasUppercase,
  hasLowercase,
  hasDigit,
} = functions.validators;

//koppelen passwordVerifier aan isValid variabele
const isValid = functions.passwordVerifier;

//de testjes
describe("Password verifier", () => {
  test("Checks isNotBlank met lege string", () => {
    expect(isNotBlank("")).toBe(false);
  });

  test("Checks isNotBlank met string", () => {
    expect(isNotBlank("x")).toBe(true);
  });

  test("Password should be at most 8 characters met meer karakters", () => {
    expect(isLessThan8Chars("wincacademy")).toBe(false);
  });

  test("Password should be at most 8 characters 4 karakters", () => {
    expect(isLessThan8Chars("winc")).toBe(true);
  });

  test("Password should have an uppercase character kleine letters", () => {
    expect(hasUppercase("winc")).toBe(false);
  });

  test("Password should have an uppercase character hoofdletter", () => {
    expect(hasUppercase("Winc")).toBe(true);
  });

  test("Password should have a lowercase character (geen lowercase)", () => {
    expect(hasLowercase("$^@#%")).toBe(false);
  });

  test("Password should have a lowercase character (wel lowercase)", () => {
    expect(hasLowercase("winc")).toBe(true);
  });

  test("Password should have a digit character (geen getal)", () => {
    expect(hasDigit("Winc")).toBe(false);
  });

  test("Password should have a digit character (wel een getal)", () => {
    expect(hasDigit("Winc5")).toBe(true);
  });

  /* PASSWORD IS VALID */
  test("Password is valid", () => {
    expect(isValid("gw")).toBe(true);
  });

  test("Password is not valid", () => {
    expect(isValid("GW")).toBe(false);
  });
});
