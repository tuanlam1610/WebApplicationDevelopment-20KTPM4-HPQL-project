const jwt = require("jsonwebtoken");
module.exports = {
    generateToken: function (payload){
        const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: '30m'
        });
        const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET);
        return {accessToken, refreshToken}
    },
    TokenDecode: function (accessToken, refreshToken){
        try {
            return jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
        }
        catch (error){
            if (error instanceof jwt.TokenExpiredError){
                try{
                    const payload = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
                    const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET,{
                        expiresIn: '30m'
                    });
                    return {...payload, accessToken: accessToken}
                }
                catch (err){
                    console.log('Can\'t renew access Token');
                    return {};
                }
            }
            return {};
        }
    }
}