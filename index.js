// index.js:

import path from "path";
import { Application } from "daytona-mvc";

const app = new Application();
console.log("app.config", app.config);
console.log("tenants", app.tenants.all[0].config);
