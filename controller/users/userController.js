const connection = require("../../connection")


/**
 * Executes a SQL query to retrieve a user from the database based on their ID and sends the result as a response.
 *
 * @param {Object} req - The request object containing the ID of the user to retrieve.
 * @param {Object} res - The response object used to send the result.
 * @return {void}
 */
module.exports = (req, res) => {
	const sql = "SELECT * FROM user WHERE id_user = ?"
	connection.query(sql, [req.body.id], (error, result) => {
		if (error) console.log(error)
		else if (result.length > 0){
			res.status(200).json(result)
		}
		else {
			res.status(400).json({'Error': 1})
		}
	})
}

