// auth-gateway.js:

import { TableDataGateway } from "daytona-mvc";
import authSchema from "./auth-schema.js";

export default class ServerConfigAuth extends TableDataGateway {
  constructor(driver) {
    super(driver, "auths", authSchema);
  }

  static modelName() {
    return "authGateway";
  }
}
