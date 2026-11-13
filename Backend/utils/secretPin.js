const crypto = require("crypto")

const genSecretPin =()=>{
    return crypto.randomInt(1000 , 10000)
}

module.exports = genSecretPin


console.log(genSecretPin)