const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./api/routers/user.router');
const loaispRouter = require('./api/routers/loaisp.router');
const sanphamRouter = require('./api/routers/sanpham.router');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/ThuNghiem02');
const test = () => {
    Object.keys(data).forEach( function(k){
        var _dic = [];
        var _ward = [];
         Object.keys(data[k].district).forEach(function(j) {
            Object.keys(data[k].district[j].ward).forEach( function(l) {
                _ward.push({
                    name: data[k].district[j].ward[l].name,
                    code: data[k].district[j].ward[l].code,
                })
            });
            _dic.push({
                name: data[k].district[j].name,
                code: data[k].district[j].code,
                ward: _ward
            })
            
        });
        const new_address = new address({
            city: data[k].name,
            district: _dic,
            code: data[k].code
        })
        try {
            new_address.save()
        }
        catch(Err) {
            console.log(Err)
        }
    });
}
// test();
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(cors())

userRouter(app);
loaispRouter(app);
sanphamRouter(app);

app.get('/', (req, res) => {res.send('welcome to Phong Thuy')})

app.listen(port, () => console.log("server running on port " + port));