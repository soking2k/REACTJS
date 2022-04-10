'use strict'
const loaisp_controller = require('../controllers/loaisp.controller');
module.exports = (app) => {
    app.route('/loaisp')
        .get(loaisp_controller.getloaisp)
}