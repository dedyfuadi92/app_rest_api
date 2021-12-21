'use strict';
module.exports = function (app) {
    var jsonku = require('./controller');
    app.route('/')
        .get(jsonku.index);
    app.route('/alldata')
        .get(jsonku.tampilSemuaData);
    app.route('/filter_data')
        .get(jsonku.tampilFilterid);
    app.route('/add_data')
        .post(jsonku.tambahData);
    app.route('/edit_data')
        .put(jsonku.ubahData);
    app.route('./delete-data')
        .delete(jsonku.hapusData);
};