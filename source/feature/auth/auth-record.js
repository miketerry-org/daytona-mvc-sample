// auth-record.js

import { ActiveRecord } from "daytona-mvc.js";
import authSchema from "./auth-schema.js";

export default class AuthRecord extends ActiveRecord {
  constructor(driver, config = {}) {
    super(driver, "auths", authSchema, config);
  }
}
