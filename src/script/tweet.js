"use strict";
exports.__esModule = true;
var auth_1 = require("./auth");
var config = require('config');
exports.tweet = function (props) {
    var _a = {
        ACCESS_TOKEN: config.get('ACCESS_TOKEN'),
        ACCESS_TOKEN_SECRET: config.get('ACCESS_TOKEN_SECRET'),
        CONSUMER_API_KEY: config.get('CONSUMER_API_KEY'),
        CONSUMER_API_KEY_SECRET: config.get('CONSUMER_API_KEY_SECRET')
    }, ACCESS_TOKEN = _a.ACCESS_TOKEN, ACCESS_TOKEN_SECRET = _a.ACCESS_TOKEN_SECRET, CONSUMER_API_KEY = _a.CONSUMER_API_KEY, CONSUMER_API_KEY_SECRET = _a.CONSUMER_API_KEY_SECRET;
    console.log(ACCESS_TOKEN, ACCESS_TOKEN_SECRET, CONSUMER_API_KEY, CONSUMER_API_KEY_SECRET, process.env);
    if (ACCESS_TOKEN &&
        ACCESS_TOKEN_SECRET &&
        CONSUMER_API_KEY &&
        CONSUMER_API_KEY_SECRET) {
        var client = auth_1.auth({
            access_token_key: ACCESS_TOKEN,
            access_token_secret: ACCESS_TOKEN_SECRET,
            consumer_key: CONSUMER_API_KEY,
            consumer_secret: CONSUMER_API_KEY_SECRET
        });
        client.post("statuses/update", {
            status: "asdf"
        }, function (err, tweet) {
            if (err)
                throw err;
            console.log(tweet);
        });
    }
};
