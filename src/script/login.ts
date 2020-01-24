import { readUserInput } from "./readUserInput"

const assert = require('assert')
// const fs = require('fs')

import * as fs from 'fs'

export const login = async () => {
    const consumer_key = await readUserInput('please input your twitter account`s consumer api key\n')
    const consumer_key_secret = await readUserInput('please input your twitter account`s consumer api key secret\n')
    const access_token = await readUserInput('please input your twitter account`s access token\n')
    const access_token_secret = await readUserInput('please input your twitter account`s access token secret\n')

    assert(consumer_key && consumer_key_secret && access_token && access_token_secret);

    if(!fs.existsSync('./config/')){
        fs.mkdirSync('./config/')
    }
    const json = `
{
    "ACCESS_TOKEN": "${access_token}",
    "ACCESS_TOKEN_SECRET": "${access_token_secret}",
    "CONSUMER_API_KEY": "${consumer_key}",
    "CONSUMER_API_KEY_SECRET": "${consumer_key_secret}"
}
    `
    fs.writeFileSync('./config/default.json',json)
}