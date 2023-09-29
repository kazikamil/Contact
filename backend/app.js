const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer=require('./multer');
const mongoose = require('mongoose');
const cors = require("cors");
const Form=require('./form')
mongoose.connect('mongodb+srv://<username>:<PASSWORD>@<cluster>/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/contact',multer.single('file'),(req,res,next)=>
{
     if(!req.file)
     {
      console.log("no file");
     }
     console.log('hi');
     console.log(req.body);
     const form=new Form({...req.body,fileUrl: `${req.protocol}://${req.get('host')}/files/${req.file.filename}`});
     res.status(201).json({
      message: 'success'
    });
});
module.exports=app