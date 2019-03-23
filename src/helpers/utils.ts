import {Platform} from "ionic-angular";

export class Utils {

  private static instance: Utils;

  days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
  monthsLong = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  static getInstance() {
    if (!this.instance) {
      this.instance = new Utils();
    }

    return this.instance;
  }

  static isEmailValid(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  //
  // platforms
  //
  static isPlatformWeb(plt: Platform) {
    return plt.is('core') || plt.is('mobileweb');
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

  static pad(num: number, size: number): string {
    let s = num + '';
    while (s.length < size) { s = '0' + s; }
    return s;
  }

  //
  // date format
  //
  toDateWithDay(timestamp) {
    const d = new Date(timestamp);

    // format: Feb 12, Monday
    const date = Utils.pad(d.getDate(), 2);

    return this.months[d.getMonth()] + ' ' + date + ', ' + this.days[d.getDay()];
  }
  toDateLong(timestamp) {
    const d = new Date(timestamp);

    // format: Feb 12, 2019
    const date = Utils.pad(d.getDate(), 2);

    return this.monthsLong[d.getMonth()] + ' ' + date + ', ' + d.getFullYear();
  }
}

