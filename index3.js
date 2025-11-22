import { ConfigLoader } from "daytona-mvc";

const config = new ConfigLoader();
await config.load();
// console.log(JSON.stringify(config.toJSON(), null, 2));

console.log("hello mike");
