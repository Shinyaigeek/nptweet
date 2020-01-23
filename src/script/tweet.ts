import fetch from "node-fetch";
import { auth } from "./auth";

const config = require("config");

import { readUserInput } from "./readUserInput";

export const tweet = async () => {
  const {
    ACCESS_TOKEN,
    ACCESS_TOKEN_SECRET,
    CONSUMER_API_KEY,
    CONSUMER_API_KEY_SECRET
  } = {
    ACCESS_TOKEN: config.get("ACCESS_TOKEN"),
    ACCESS_TOKEN_SECRET: config.get("ACCESS_TOKEN_SECRET"),
    CONSUMER_API_KEY: config.get("CONSUMER_API_KEY"),
    CONSUMER_API_KEY_SECRET: config.get("CONSUMER_API_KEY_SECRET")
  };
  if (
    ACCESS_TOKEN &&
    ACCESS_TOKEN_SECRET &&
    CONSUMER_API_KEY &&
    CONSUMER_API_KEY_SECRET
  ) {
    const client = auth({
      access_token_key: ACCESS_TOKEN,
      access_token_secret: ACCESS_TOKEN_SECRET,
      consumer_key: CONSUMER_API_KEY,
      consumer_secret: CONSUMER_API_KEY_SECRET
    });

    const tweet = await readUserInput("please input tweet\n");

    const isOk = await getConfirm(tweet);

    if (isOk) {
      client.post(
        "statuses/update",
        {
          status: tweet
        },
        (err: any, tweet: string) => {
          if (err) throw err;
          console.log(tweet);
        }
      );
    }
  }
};

const getConfirm = async (tweet: string) => {
  let getConfirm = false;
  let isOk: boolean = false;
  while (!getConfirm) {
    const ans = await readUserInput(`Are you sure to tweet ${tweet}? y/N       `);
    switch (ans) {
      case "Y": {
        getConfirm = true;
        isOk = true;
        break;
      }
      case "y": {
        getConfirm = true;
        isOk = true;
        break;
      }

      case "yes": {
        getConfirm = true;
        isOk = true;
        break;
      }
      case "YES": {
        getConfirm = true;
        isOk = true;
        break;
      }

      case "N": {
        getConfirm = true;
        isOk = false;
        break;
      }
      case "n": {
        getConfirm = true;
        isOk = false;
        break;
      }

      case "no": {
        getConfirm = true;
        isOk = false;
        break;
      }
      case "NO": {
        getConfirm = true;
        isOk = false;
        break;
      }
    }
  }
  return isOk;
};
