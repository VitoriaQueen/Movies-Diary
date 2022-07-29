const mongoose = require('mongoose')
const crypto = require('crypto')

const UserSchema = new mongoose.Schema({
   
    username: { type: String, require: true, unique: true},
    encry_password: {type: String, required: true},
    salt: String,
    },
    {timestamps: true},
    {collection: 'test.users'},
    
    
)

const userModel = mongoose.model('UserSchema', UserSchema)

UserSchema.virtual('password')
.set(function(password) {
    this._password = password
    this.salt = uuidv1()
    this.encry_password = this.securePassword(password)

})
.get(function() {
    return this.password
})

UserSchema.methods = {
    authenticate: function(plainPassword) {
        return this.securePassword(plainPassword) === this.encry_password
    },

    //return secure password
    securePassword: function(plainPassword) {
        if(!plainPassword) return "";

        try {
            return crypto.createHmac('sha256', this.salt).update(plainPassword).digest('hex')
        } catch (err) {
            return ""
        }
    }
}

module.exports = mongoose.model('Users', UserSchema)
