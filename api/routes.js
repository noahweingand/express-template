'use strict';

const controller = require('./controller');

module.exports = function (app) {

    // health
    app.route('/api/_health').get(controller.getHealth);

};