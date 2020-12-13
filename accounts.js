const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require("./models/user");

const signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
    if (err) {
      res.json({ error: err });
    }
    
let user = new User ({
username: req.body.username,
password: hashedPass


})
user.save()
.then(user => {
   
    return res.redirect('./login.html')
})
.catch(error => { res.json({ message: 'Error'})})
  })

}
const login = (req, res, next) => {
var username = req.body.username
var password = req.body.password

User.findOne({$or: [{username: username}]})
.then(user =>{

    if(user){

        bcrypt.compare(password, user.password, function(err, result)
        { if(err){
            register.json({
                 error: err
                })
                }
             if(result){ 
             let token = jwt.sign({username: user.username}, 'verySecretValue' , {expiresIn: '10m'})
             res.redirect('./user.html')
             }else{res.json({message: 'Password is incorrect! Please go back and try again'})}
             }) 
    } else{
res.json({
    message: "user does not exit! please go back and sign up :)"
})

    }
})
}



module.exports = {
    signup , login
}
