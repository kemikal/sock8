const mysql = require("mysql2");

connection = mysql.createConnection({
    host: "192.168.50.182",
    port:"3306",
    user: "chat_room",
    password: "DTb5-(nff.pnA0NH",
    database: "chat_room"
})

module.exports = connection;