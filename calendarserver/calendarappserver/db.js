var mysql = require('mysql');

var dbConnection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'calendardb',
});

dbConnection.connect(function(error){
	if(!!error)
		console.log("Error:" + error);
	else
		console.log("Db Connected");
});
module.exports = dbConnection;