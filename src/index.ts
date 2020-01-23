import * as script from "./script"

console.log('--------------')

process.argv.forEach((content, index) => {
    if(index === 2){
        switch(content) {
            case "login":  {
                console.log("login")
            }
            case "logout": {

            }
            case "tweet": {

            }
            default :{
                console.log("There is no")
            }
        }
    }
})

console.log("---------------")