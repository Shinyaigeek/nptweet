"use strict";
exports.__esModule = true;
// import Twitter from "twitter";
var Twitter = require('twitter');
exports.auth = function (props) {
    return new Twitter(props);
};
