import * as fs from "fs";
import { readUserInput } from "./readUserInput";

export const logout = async () => {
  if (!fs.existsSync("./config/")) {
    fs.mkdirSync("./config/");
  }
  const json = `
{
    "ACCESS_TOKEN": "",
    "ACCESS_TOKEN_SECRET": "",
    "CONSUMER_API_KEY": "",
    "CONSUMER_API_KEY_SECRET": ""
}
    `;
  const ans = await readUserInput(
    "Are you really logout from nptwitter? y/N        "
  );
  switch (ans) {
    case "y": {
      fs.writeFileSync("./config/default.json", json);
      break;
    }
    case "yes": {
      fs.writeFileSync("./config/default.json", json);
      break;
    }
    case "Y": {
      fs.writeFileSync("./config/default.json", json);
      break;
    }
    case "YES": {
      fs.writeFileSync("./config/default.json", json);
      break;
    }
    
  }
};
