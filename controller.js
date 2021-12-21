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
exports.tampilFilterid = function (req, res) {
    let id = req.params.id;
    connection.query('select *from mahasiswa where id_mahasiswa="2"', [id], function (error, rows, fields) {
        if (error) {
            connection.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};