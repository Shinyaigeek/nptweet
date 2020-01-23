"use strict";
exports.__esModule = true;
var script = require("./script");
console.log("--------------");
process.argv.forEach(function (content, index) {
    if (index === 2) {
        switch (content) {
            case "login": {
                console.log("login");
            }
            case "logout": {
            }
            case "tweet": {
                script.tweet({
                    account_id: "Shinyaigeek",
                    tweet: "asdf"
                });
                break;
            }
            default: {
                console.log("There is no");
            }
        }
    }
});
console.log("---------------");
