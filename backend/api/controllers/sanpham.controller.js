'use strict'
const sanpham = require('../models/SanPham.model');
exports.getsanpham = (req, res) => {
    sanpham.find({}, (err, docs) => {
        if(err) {
            console.log(err);
        } 
        res.status(200).json({data:docs});
    })
}