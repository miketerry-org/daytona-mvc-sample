// auth-controller.js:

import { BaseController } from "daytona-mvc";

export default class AuthController extends BaseController {
  static route() {
    return "/auth";
  }
}
