'use strict';
module.exports = function (app) {
    var jsonku = require('./controller');
    app.route('/')
        .get(jsonku.index);
    app.route('/alldata')
        .get(jsonku.tampilSemuaData);
    app.route('/data_id')
        .get(jsonku.tampilFilterid);
    app.route('/add_id')
        .post(jsonku.tambahData);
    app.route('/edit_data')
        .put(jsonku.ubahData);
};