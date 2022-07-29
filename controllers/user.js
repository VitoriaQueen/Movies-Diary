const User = require("..model/user")

exports.register = (req, res) => {
const user = new User(req.body)
user.save((err, user) => {
    if (err) {
        return res.status(400).json({
            error: "Unable to add user"
        })
    } 

    res.json({
        message: "Success",
        user 
    })
 })
}
