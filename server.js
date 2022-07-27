const express = require('express')
const mongoose = require('mongoose')
const app = express();
const path = require('path')
//app.use('/', express.static(path.join(__dirname, 'static')))
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const User = require('./model/user')
const bcrypt = require('bcryptjs')

app.use('/', express.static(__dirname))
const uri =
 "mongodb+srv://VitoriaQueen:$aTKsX3hj$2%407@mywebapp1.flpgf.mongodb.net/?retryWrites=true&w=majority"

async function connect() {
    try {
        await mongoose.connect(uri)
        console.log("Connected to MongoDB");
    }catch (error) {
        console.error(error);
    }
}
connect();


app.post('/api/register', async (req, res) => {
    console.log(req.body)

    /*Block to implement password encryption
      const {username, password: plainTextPassword } = req.body
      const password = await bcrypt.hash(password, 10)
      console.log(await bcrypt.hash(password, 10))*/

    const newUser = new User(req.body)
    await newUser.save()
    res.send(req.body)

})

app.listen(8000, () => {
    console.log("Server started on port 8000");
});





