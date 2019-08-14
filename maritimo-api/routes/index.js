const express = require('express');
const router = express.Router();
const { Contact } = require('../models')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/maritimo');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({status: 'into Maritimo-api'})
});

router.get('/get-all', (req, res, next) => {
  Contact.find()
    .then((doc) => {
      res.json(doc);
    })
});

router.post('/insert', (req, res, next) => {
  var item ={
    name: req.body.name,
    email: req.body.email,
    cell: req.body.cell,
    comment: req.body.comment
  }
  var data = new Contact(item);
  data.save();

  res.json({
    status: "Saved.."
  })
});

router.put('/update/', (req, res, next) => {
  var item ={
    name: req.body.name,
    email: req.body.email,
    cell: req.body.cell,
    comment: req.body.comment
  };
  var id = req.body.id;

  Contact.findByIdAndUpdate(id,item).exec();
  res.json({
    status: "Updated.."
  })
});

router.delete('/delete/', (req, res, next) => {
  var id = req.body.id ;
  
  Contact.findByIdAndDelete(id).exec();
  res.json({
    status: "Deleted.."
  })
});


module.exports = router;