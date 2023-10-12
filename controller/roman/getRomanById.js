const connection = require("../../connection")

/**
 * Retrieves the details of a novel and its associated chapters, comments, and users.
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 */
module.exports = (req, res) => {
	const id = parseInt(req.params.id);

	connection.query(
		"SELECT *, chapter.title, chapter.content, comment.message, users.name " +
		"FROM chapter " +
		"INNER JOIN roman " +
		"ON chapter.roman_id = roman.id_roman " +
		"INNER JOIN comment " +
		"ON comment.roman_id = roman.id_roman " +
		"INNER JOIN users " +
		"ON comment.user_id = users.id_user " +
		"WHERE roman.id_roman = ?", [id], (error, result) => {

		if (error) console.log(error)
		else if (result.length > 0){
			res.status(200).json(result)
		}
		else {
			res.status(400).json({'Any novel not found': 1})
		}
	})
}