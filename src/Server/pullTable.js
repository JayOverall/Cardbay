var sql = require("mssql");
var express = require('express');
var app = express();


var config = {
    user: 'u223115753_Jasperadmin1',
    password: 'Jasperadmin1',
    server: 'sql260.main-hosting.eu',
    database: 'u223115753_cardbay'
};

const pullTable = async () => {
    try {
        const pool = await sql.connect(config);
        const sqlQuery = 'SELECT * FROM Persons';
        const result = await pool.request().query(sqlQuery);
        return result.recordset;
    } catch (err) {
        throw err;
    }
};

exports.pullTable = pullTable;
