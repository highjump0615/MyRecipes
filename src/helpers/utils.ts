export class Utils {

  static isEmailValid(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }


  //
  // string manipulation
  //
  static stringContainUppercase(str) {
    return str.toLowerCase() != str;
  }

  static stringContainLowercase(str) {
    return str.toUpperCase() != str;
  }

  static stringContainNumber(str) {
    return str.match(/\d+/g);
  }
}

