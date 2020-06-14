const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://C1:1234@btbg-60tbq.mongodb.net/<dbname>?retryWrites=true&w=majority',
{useNewUrlParser: true}).then(()=>console.log('DB connected'))
                        .catch(err=> console.error(err));






app.get('/',(req,res)=>{
    res.send('hello world')
});





app.listen(5000);


