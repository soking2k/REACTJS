// To connect with your mongoDB database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/', {
    dbName: 'ThuNghiem01',
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => err ? console.log(err) : 
    console.log('Connected to ThuNghiem01 database'));

// Schema for users of app
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
const User = mongoose.model('users', UserSchema);
User.createIndexes();

// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {

    resp.send("App is Working");
    // You can check backend is working or not by 
    // entering http://loacalhost:5000
    
    // If you see App is working means
    // backend working properly
});


app.post("/register", async (req, resp) => {
    if ((typeof req.body.email === 'undefined')
        || typeof req.body.firstName === 'undefined'
    ) {
        resp.status(422).json({ msg: 'Invalid data' });
        return;
    }
    let { firstName ,email} = req.body;
    const newUser = new User({
        name: firstName,
        email: email,
       
    });
  
    try {
        await newUser.save();
        resp.status(201).json({ msg: 'success' })

    }
    catch (err) {
        console.log(err);
        return;
    }
    resp.status(201).json({ msg: 'success' })
});

app.listen(5000);