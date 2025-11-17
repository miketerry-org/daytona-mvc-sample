// task-controller.js:

import { BaseController } from "daytona-mvc";

export default class TaskController extends BaseController {
  static route() {
    return "/tasks";
  }
}
