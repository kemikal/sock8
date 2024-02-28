const mysql = require("mysql2");

connection = mysql.createConnection({
    host: "localhost",
    port:"8889",
    user: "chat_room",
    password: "DTb5-(nff.pnA0NH",
    database: "chat_room"
})

module.exports = connection;