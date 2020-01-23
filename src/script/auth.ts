// import Twitter from "twitter";
const Twitter = require('twitter')


interface AuthProps {
  consumer_key: string;
  consumer_secret: string;
  access_token_key: string;
  access_token_secret: string;
}

export const auth = (props: AuthProps) => {
  return new Twitter(props);
};
