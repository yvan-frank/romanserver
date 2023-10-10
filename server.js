const express = require('express')
const dotenv = require('dotenv')

// routes import
const romanRoute = require('./routes/roman')
const userRoute = require('./routes/user')

const app = express();
dotenv.config()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/', (req, res) => {
	res.send('Hello Same')
})

app.use('/novel', romanRoute)
app.use('/users', userRoute)

app.listen(3001, () => {
	console.log('server start at port ', 3001)
})