import jwt from 'jsonwebtoken'
import config from '../config/config.js'

const generateTokenAndSetCookie = async (userId,res)=>{
    const token = jwt.sign({userId}, config.JWT_SECRET,{expiresIn: '1d'});

        res.cookie("jwt-token",token,{
            maxAge: 1*24*60*60*1000, //1 day x 24 hours x 60 min x 60 sec x1000 milliesec
            httpOnly: true, //it means it's only accesible by the browser, not accessible by js,
            sameSite:"strict", //will preven fogery attacks,
            secure: config.NODE_ENV !=="development"//used only in https not localhost http
        })

        return token;
}

export default generateTokenAndSetCookie;