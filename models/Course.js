const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema ({
  title: String,
  imageUrl: {type:String},
  description: String,
  instructor: String,
  day: String,
  time: String,
  startDate: {type:Date,default: Date.now},
  duration: {type:String,min:0},
  cost: String,
  
},
{
  timestamps:true
}
);

const Course = mongoose.model('Course',courseSchema);
module.exports = Course;