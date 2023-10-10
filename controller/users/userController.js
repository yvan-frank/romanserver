const connection = require("../../connection")


module.exports = (req, res) => {
	const sql = "SELECT * FROM user"
	connection.query(sql, (error, result) => {
		if (error) console.log(error)
		else if (result.length > 0){
			res.status(200).json(result)
		}
		else {
			res.status(400).json({'Error': 1})
		}
	})
}