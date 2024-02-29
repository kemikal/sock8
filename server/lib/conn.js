const mysql = require("mysql2");

connection = mysql.createConnection({
    host: "localhost",
    port:"3306",
    user: "chat_room",
    password: "DTb5-(nff.pnA0NH",
    database: "chat_room"
})

module.exports = connection;