const mysql = require('mysql')

// connect to the database
const connection= mysql.createConnection({
	host: 'localhost',
	user:'root',
	password:'',

	database:'romans',
	port:3306
})

connection.connect((err)=>{
	if (err) console.log('error found: ',err);
	else console.log('database connected!');
})

module.exports = connection