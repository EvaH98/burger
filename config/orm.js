var connection = require("../config/connection.js");


function questionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    };

    return arr.toString();
};


var orm = {
    selectAll: function (tableInput, cb) {
        var query = "SELECT * FROM " + tableInput + ";";
        connection.query(query, function(err, result) {
            if (err) throw err;
            cb(result)
        });
    },

    insertOne: function (table, cols, vals, cb) {
        var query = "INSERT INTO " + table;
        query += "(" + cols.toString() + ")";
        query += "VALUES (" + questionMarks(vals.length) + ") ";
        
        connection.query(query, vals, function(err, result) {
            if (err) throw err;

            cb(result);
        });
    },

    updateOne: function (table, column, condition, cb) {
        var query = "UPDATE " + table;
        query += " SET " + column;
        query += " WHERE " + condition;

        connection.query(query, function(err, result) {
            if (err) throw err;

            cb(result);
        });
    }
};

module.exports = orm;