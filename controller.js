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
    connection.query('select *from mahasiswa where id_mahasiswa="12"',
        [id],
        function (error, rows, fields) {
            if (error) {
                connection.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};
exports.tambahData = function (req, res) {
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query('insert into mahasiswa (nim,nama,jurusan) values (?,?,?)',
        [nim, nama, jurusan],
        function (error, rows, fields) {
            if (error) {
                connection.log(error);
            } else {
                response.ok('Berhasil tambah data', res);
            }
        });
};
exports.ubahData = function (req, res) {
    var id = req.body.id_mahasiswa;
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query('update mahasiswa set nim=?, nama=?, jurusan=? where id_mahasiswa=?',
        [nim, nama, jurusan, id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok('Berhasil ubah data', res);
            }
        }
    );
};
exports.hapusData = function (req, res) {
    var id = req.body.id_mahasiswa;
    connection.query('delete from mahasiswa where id_mahasiswa=?',
        [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok('Berhasil ubah data', res);
            }
        }
    );
};