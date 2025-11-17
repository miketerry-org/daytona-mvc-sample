// project-controller.js:

import { BaseController } from "daytona-mvc";

export default class ProjectController extends BaseController {
  static route() {
    return "/projects";
  }
}
