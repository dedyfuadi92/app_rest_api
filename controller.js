'use strict';
var response = require('./res');
var connection = require('./koneksi');
exports.index = function (req, res) {
    response.ok('Aplikasi rest api is worked', res);
};
exports.tampilSemuaData = function (req, res) {
    connection.query('select *from mahasiswa', function (error, rows, fields) {
        if (error) {
            connection.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};