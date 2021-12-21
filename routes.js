'use strict';
module.exports = function (app) {
    var jsonku = require('./controller');
    app.route('/')
        .get(jsonku.index);
    app.route('/alldata')
        .get(jsonku.tampilSemuaData);
    app.route('/data_id')
        .get(jsonku.tampilFilterid);
};