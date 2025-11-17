// User-controller.js:

import { BaseController } from "daytona-mvc";

export default class UserController extends BaseController {
  static route() {
    return "/users";
  }
}
