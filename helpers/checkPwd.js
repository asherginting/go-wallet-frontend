const checkPassword = (pass) => {
  let result = false;
  if (/[A-Z]/.test(pass) && /[a-z]/.test(pass) && /[0-9]/.test(pass) && pass.length >= 6) {
    result = true;
  }

  return result;
};

export default checkPassword;
