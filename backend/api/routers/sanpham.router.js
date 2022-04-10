'use strict'
const sanpham_controller = require('../controllers/sanpham.controller');
module.exports = (app) => {
    app.route('/sanpham')
        .get(sanpham_controller.getsanpham)
}