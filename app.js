const express = require('express')
const mongoose = require('mongoose')
const app = express();

const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require("cookie-parser")
const cors = require('cors') 
require('dotenv').config();





//middleware
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors)

const userRoutes = require("./routes/user")
app.use('/api', userRoutes)

/*app.get('/', function(req, res)
{
    res.sendfile('index.html');
})*/


const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log('App running at port ' + port)
})

//DB Connection
const uri =
 "mongodb+srv://VitoriaQueen:$aTKsX3hj$2%407@mywebapp1.flpgf.mongodb.net/?retryWrites=true&w=majority"
 
 app.use('/', express.static(path.join(__dirname, 'static')))
async function connect() {
    try {
        await mongoose.connect(uri) 
        console.log("Connected to MongoDB");
    }catch (error) {
        console.error(error);
    }
}
connect();






/*const bcrypt = require('bcryptjs')

//const User = require('./model/user')


//read db
app.post('/api/register', async (req, res) => {
    console.log(req.body)

   // password encryption option
      const {username, password: plainTextPassword } = req.body

      if(!username || typeof username !== 'string') {
        return res.json({ status: 'error', error: 'Invalid username'})
      }
      if(!plainTextPassword || typeof plainTextPassword !== 'string') {
        return res.json({ status: 'error', error: 'Invalid password'})
      }
      
      const password = await bcrypt.hash(password, 10)
     
      //console.log(await bcrypt.hash(password, 10))

    try{
       const response = await User.create({
                username,
                password
            })
            console.log('User created')
        }catch(error){
            if (error.code ===11000){
                //duplicate key
                return res.jason({ status: 'error', error: 'User name already exists.'})
            }
            throw error
            
            return res.json({status: 'error'})
        }
      
})

app.listen(8000, () => {
    console.log("Server started on port 8000");
});*/





