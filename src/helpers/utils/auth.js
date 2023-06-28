import { Storage } from "./storage";
// check if user is authenticated
export class Auth {
  static isAuthenticated() {
    const user = Storage.getItem("user");
    // if (user && user.token) {
    //   return true;
    // } else {
    //   return false;
    // }
    return !!user;
  }

  static headers() {
    return {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
  }
  static authHeader() {
    const user = Storage.getItem("user");
    if (user && user.access_token) {
      return {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + user.access_token,
      };
    } else {
      return {};
    }
  }
}
