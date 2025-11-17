// comment-controller.js:

import { BaseController } from "daytona-mvc";

export default class CommentController extends BaseController {
  static route() {
    return "/comments";
  }
}
