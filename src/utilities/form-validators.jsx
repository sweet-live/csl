class FormValidator {
  constructor() {}
  mobileRegex = /((\+44(\s\(0\)\s|\s0\s|\s)?)|0)7\d{3}(\s)?\d{6}/i;
  numberRegex = /[0-9]/i;
  emailRegex =
    /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i;

  validatePhone(phone) {
    return this.mobileRegex.test(phone);
  }

  validateEmail(email) {
    return this.emailRegex.test(email);
  }
  validateNum(input) {
    return this.numberRegex.test(input);
  }

  validateForm(bool) {
    console.log(bool);
    console.log(bool["name"] && bool["email"] && bool["phone"] && bool["msg"]);
    return bool["name"] && bool["email"] && bool["phone"] && bool["msg"];
  }
}

export default FormValidator;
