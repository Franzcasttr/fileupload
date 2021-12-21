const express = require('express')
require('dotenv').config()
const connectDB = require('./db/connect')
const errorhandler = require('./middleware/errorhandler')
const notfound = require('./middleware/notfound')
const router = require('./routes/routes')
const app = express()
const fileupload = require('express-fileupload')
const cloudnary = require('cloudinary').v2
cloudnary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret:process.env.API_SECRET
})


app.use(express.json())
app.use(express.static('./public'))
app.use(fileupload({useTempFiles:true}))
app.set('view engine', 'ejs')
app.use('/api/v1/product', router)
app.get('/', (req,res)=>{res.render('index')})
app.use(notfound)
app.use(errorhandler)

const port = 3000
const start = async() =>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(process.env.PORT || port, console.log(`Server is listening to port ${port}`))

    }
    catch(error){
        console.log(error)
    }
    
}
start()