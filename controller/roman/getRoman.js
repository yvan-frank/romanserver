const connection = require("../../connection")

/**
 * Executes a SQL query to retrieve all records from the "roman" table and sends the result as a JSON response.
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @return {void}
 */
module.exports = (req, res) => {
	const sql = "SELECT * FROM roman"
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