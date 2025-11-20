// auth-record.js

import { ActiveRecord } from "daytona-mvc";
import authSchema from "./auth-schema.js";

export default class AuthRecord extends ActiveRecord {
  constructor(driver) {
    super(driver, "auths", authSchema);
  }

  static modelName() {
    return "authRecord";
  }
}
