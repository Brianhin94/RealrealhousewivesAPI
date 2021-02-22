const mongoose = require('mongoose');

const housewifeSchema = new mongoose.Schema({
   id: {
       type: Number
   },
   first_name: {
       type: String
   },
   last_name: {
       type: string
   },
   
})

module.exports = mongoose.model('Housewife', housewifeSchema);