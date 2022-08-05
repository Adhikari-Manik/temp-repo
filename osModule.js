const os = require("os");

const user = os.userInfo();

console.log(user);

// method to return uptime from our system in second

console.log(`The uptime of my system is ${os.uptime()}`);
