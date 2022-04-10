'use strict'
const loaisp = require('../models/loaisp.model');
exports.getloaisp = (req, res) => {
    loaisp.find({}, (err, docs) => {
        if(err) {
            console.log(err);
        } 
        res.status(200).json({data:docs});
    })
}