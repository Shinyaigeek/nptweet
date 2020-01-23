import * as script from "./script";

process.argv.forEach((content, index) => {
  if (index === 2) {
    switch (content) {
      case "login": {
        console.log("login");
      }
      case "logout": {
      }
      case "tweet": {
        script.tweet();
        break;
      }
      default: {
        console.log("There is no");
      }
    }
  }
});

