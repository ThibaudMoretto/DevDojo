const jwt = require('jsonwebtoken')

module.exports = {
    getAccessToken (username) {
    
        const user = { name: username }
    
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
        return accessToken;

    },

    getRefreshToken () {

    }
}