export class Storage {
  static setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static getItem(key, defaultVal = {}) {
    const data = localStorage.getItem(key);

    if (data == null) {
      return defaultVal;
    } else if (
      data.charAt(0) === "[" ||
      data.charAt(0) === "{" ||
      data.charAt(0) === '"'
    ) {
      return JSON.parse(data);
    } else {
      return data;
    }
  }

  static removeItem(key) {
    localStorage.removeItem(key);
  }
}
