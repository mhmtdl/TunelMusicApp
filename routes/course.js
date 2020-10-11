const express = require('express');
const router = express.Router();

const Course = require('../models/Course.js');
const nodemailer = require('nodemailer');


router.get('/index/courses',(req,res,next)=>{
  Course.find()
  .lean()
  .then(allcoursesDB=>{
    let array = []
    allcoursesDB.forEach(course=>{
      course['introduction']=course.description.slice(0,100)+"[...]"
      console.log(course)
      array=[...array,course]
    })
    console.log(array)
    res.render('course-list.hbs',{courses:allcoursesDB,array})
  })
  .catch(error=> console.log(error));
})

router.get('/courses/:courseId',(req,res,next)=>{
  const {courseId} = req.params;
  Course.findById(courseId)
  .then(theCourse =>{
    res.render('course-details',theCourse);
  })
  .catch(err=>console.log(err));
})


router.post('/index/courses/details',(req,res,next)=>{
  const{title,instructor,day,time,startDate,duration,cost} = req.body;
  Course.findById({title,instructor,day,time,startDate,duration,cost})
  .then(()=>{
    res.redirect('/courses')
  })
  .catch(err=>console.log(err))
})


router.get('/courses/:id/edit',(req,res)=>{
 const {id} = req.params;

  Course.findById(id)
  .then(courseToEdit=>{
    res.render('course-edit',courseToEdit);
  })
  .catch(error => console.log(error));
})

router.post('/courses/:id/edit',(req,res,next)=>{
  
  const { title,instructor,day,time,startDate,duration,cost,id} = req.body;

  Course.findByIdAndUpdate({_id:id},{title,instructor,day,time,startDate,duration,cost}, {new: true})
  .then(updatedCourse=> res.redirect(`/courses/${updatedCourse._id}`))
  .catch(error=> console.log(error))
})

router.get('/courses/:id/delete',(req,res)=>{
  const {id} = req.params;
  Course.findByIdAndDelete({_id:id})
  .then(courses=>{
    res.redirect('/index/private')
  })
  .catch(err=>console.log(err))
})


router.get('/send-email',(req,res)=>{
  res.render('nodemailer');
})



router.post('/send-email',(req,res,next)=>{
  let {email,subject,message} = req.body;
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.GMAILUSER,
      pass:process.env.GMAILPASS
    }
  });
  transporter.sendMail({
    from:'"My Awesome Project"<myawesome@project.com>',
    to:process.env.GMAILUSER,
    subject: subject,
    text:message,
    html:`<b>${message}</b>`
  })
  .then(info=> res.render('message',{email,subject,message,info}))
  .catch(err=>console.log(err));
})




















module.exports = router;
