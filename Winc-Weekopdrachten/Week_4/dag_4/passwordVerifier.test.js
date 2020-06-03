

test("check to see if pw has less than 9 chars", () => {
  passwordVerifier.isLessThan9Chars(password).toBe(true);
});
