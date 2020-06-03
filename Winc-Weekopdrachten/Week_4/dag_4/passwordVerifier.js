const validators = {
    isShorterThanNine: (password) => password.length < 9,
    isNotBlank: password => password !== "" && password !== null,
    hasUpperCase: password => [...password].find(c => c != c.toLowerCase()),
    hasLowerCase: password => [...password].find(c => c != c.toUpperCase()),
    hasNumber: password => [...password].find(c => !isNaN(parseInt(c)))
};
​
const passwordVerifier = (pw) => {
    const score = Object.values(validators).reduce((score, validator) => validator(pw) ? score + 1 : score, 0);
    return validators.hasLowerCase(pw) ? score >= 3 : false
}
​
module.exports = { validators, passwordVerifier };