'use strict'
const user = require('../models/user.model');

exports.register = async (req, res) => {
    if ((typeof req.body.email === 'undefined')
        || typeof req.body.firstName === 'undefined'
    
    ) {
        res.status(422).json({ msg: 'Invalid data' });
        return;
    }
    let { firstName, email} = req.body;
   
 
    const newUser = new user({
        firstName: firstName,
        email: email,
        
    });
    try {
        await newUser.save();
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ msg: err });
        return;
    }
    res.status(201).json({ msg: 'success' })
}

