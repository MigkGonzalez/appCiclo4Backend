const jwt = require('jsonwebtoken')

const Authortized = (req, res, next)=>{
    const token = req.header('x-auth-token')
    if(!token){
        res.status(403).json('unauthorized')
    }
    try{
        const decoded = jwt.verify(token, procces.env.JWT_SECRET)
        req.user = decoded
        next()
    }catch (error){
        //res.status(405).json({msg:'Invalid token'})
        res.send(error)
    }
}


module.exports = Authorized;