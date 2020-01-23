import fetch from "node-fetch";
import { auth } from "./auth";

const config = require('config')

export const tweet = () => {
  const {
    ACCESS_TOKEN,
    ACCESS_TOKEN_SECRET,
    CONSUMER_API_KEY,
    CONSUMER_API_KEY_SECRET
  } = {
      ACCESS_TOKEN: config.get('ACCESS_TOKEN'),
      ACCESS_TOKEN_SECRET: config.get('ACCESS_TOKEN_SECRET'),
      CONSUMER_API_KEY: config.get('CONSUMER_API_KEY'),
      CONSUMER_API_KEY_SECRET: config.get('CONSUMER_API_KEY_SECRET')
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
    client.post(
      "statuses/update",
      {
        status: "asdf"
      },
      (err:any, tweet:string) => {
        if (err) throw err;
        console.log(tweet);
      }
    );
  }
};
