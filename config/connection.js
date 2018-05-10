var mysql = require("mysql");

var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
});

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "ou6zjjcqbi307lip.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: " upqjngbz0bracnqp",
        password: " upqjngbz0bracnqp",
        database: "acsejklgupan455e"
    });
}

connection.connect(function(err) {
    if (err) {
        console.log("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;