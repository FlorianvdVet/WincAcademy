//op basis van uitwerking Arjan Hoek

//constante (object) met alle validatie functies
const validators = {
  isNotBlank: (s) => !!s,
  isLessThan8Chars: (s) => s && s.length <= 8,
  hasUppercase: (s) => s && /[A-Z]/.test(s),
  hasLowercase: (s) => s && /[a-z]/.test(s),
  hasDigit: (s) => s && /\d/.test(s),
};

//wrapper functie die de score berekend van een gegeven password (pw)
const passwordVerifier = (pw) => {
  const score = Object.values(validators).reduce(
    (score, validator) => (validator(pw) ? score + 1 : score),
    0
  );
  return validators.hasLowercase(pw) ? score >= 3 : false;
};

//exporteert beide constanten
module.exports = { validators, passwordVerifier };
