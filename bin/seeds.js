const mongoose = require('mongoose');
const Course = require('../models/Course');


const DB_NAME = 'musicschool-app';

mongoose.connect(`mongodb://localhost/${DB_NAME}`,{
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});


const courses = [
  {
    title: 'Drum Lessons',
    imageUrl:'https://media.guitarcenter.com/is/image/MMGS7//5-Piece-Complete-Drum-Set-Wine-Red/J56102000001000-00-1600x1600.jpg',
    description:'Many students and parents are unaware of the depth and musical advantages of studying drums and percussion instruments. Much more is gained in one drum lesson than meets the eye, including exploration of proper practice and playing techniques, note reading, and building coordination.It is given by our successful instructors in the field of lessons. ',
    instructor: 'Anil Sarcan',
    day: 'Wednesday',
    time: '18:00:00-19:00:00',
    startDate: '2020-10-14',
    duration: '8 weeks',
    cost: '200 Euro'
  },
  {
    title: 'Guitar Lessons',
    imageUrl:'https://www.expatica.com/app/uploads/sites/2/2014/05/playing-guitar.jpg',
    description: 'Depending on the duration of your first lesson, you may learn some of the notes on the strings, or even some basic guitar chords. You can also expect to begin learning about proper fretting, picking, and strumming technique.Your teacher will show you the letter names of the six guitar strings. There are guitars available with more than six strings, such as a 12-string guitar, but most people begin by playing a six-string guitar. If you bring your guitar to the lesson, you may learn about the different parts of the guitar, such as the neck, headstock, and bridge.',
    instructor:'Mahmut Sarcan',
    day: 'Friday',
    time: '18:00:00-19:00:00',
    startDate: '2020-10-16',
    duration: '8 weeks',
    cost: '200 Euro'
  },
 
  {
    title: 'Violin Lessons',
    imageUrl:'https://www.nonamehiding.com/wp-content/uploads/2020/08/What-Are-Violin-Strings-Made-Of.jpg',
    description:'The traditional violin method is a collection of teaching styles that all share a common structure, teaching the student how to read notes. Even as a beginner violinist using this method, you will learn to read music. Although this may be the only commonality among the various teaching styles. It is core to the belief that starting to read notes early on helps music students to become strong sight readers and gives them the opportunity to join in with recitals, music groups or a junior orchestra from early on.It is given by our successful instructors in the field of lessons.',
    instructor: 'Idil Sarcan',
    day: 'Monday',
    time: '18:00:00-19:00:00',
    startDate: '2020-10-12',
    duration: '10 weeks',
    cost: '300 Euro'
  },
  {
    title: 'Flute Lessons',
    imageUrl:'https://www.sagemusic.co/wp-content/uploads/2019/08/music-3090204_1280.jpg',
    description:'Instrument, there’s no question that you will benefit from private lessons with a good teacher. An experienced flutist knows far more about the flute than you do and can offer you professional tips, exclusive information, personal insight, new flute music, performance experiences, and more. Even if you’re decent at self-teaching, your flute teacher can save you from building bad habits and help you to progress immensely faster than you would on your own.  Flute lessons are lots of fun, they teach you a creative skill, they challenge your mind and body, and they aren’t limited to seasons. Flute lessons are also far more affordable than many extracurricular activities.',
    instructor: 'Uygar Sarcan',
    day: 'Thursday',
    time: '18:00:00-19:00:00',
    startDate: '2020-10-15',
    duration: '11 weeks',
    cost: '350 Euro'
  },
  
  {
    title: 'Electronic Keyboard Lessons',
    imageUrl:'https://i5.walmartimages.com/asr/24e01c57-1596-45ba-a479-75b9d778ca07_1.603f2398d8b8ade4d9d9486fc6ff8f67.jpeg',
    description:'Our Electronic Keyboard classes, lessons, programs & courses will help you bring out your hidden musical talents. You will receive Keyboard lessons that will help develop your keyboard learning skills. At  Music Academy, our trained teachers will help you to learn to play the electronic keyboard the right way. Our programs include electronic keyboard lessons for kids / children and electronic keyboard lessons for beginners. This also includes electronic keyboard lessons for teenagers / youth and electronic keyboard lessons for adults.',
    instructor: 'Caglar Boran',
    day: 'Tuesday',
    time: '18:00:00-19:00:00',
    startDate: '2020-10-13',
    duration: '9 weeks',
    cost: '300 Euro'

  },
  {
    title: 'Piano Lessons',
    imageUrl:'https://www.costco.com.au/medias/sys_master/images/h9b/hcf/29298981142558.jpg',
    description:'You will learn how to read sheet music properly, i.e. how to read all the left hand (bass notes) as well as the right hand (treble notes).This is very important as being able to read sheet music with ease will empower you to learn any song or piece of music you want to learn. Yet, surprisingly, many piano lessons do not teach this.Other lessons skirt around note reading by teaching you to read chord symbols in lieu of the left hand (bass) notes, while others encourage you to ‘strum’ along (as if you were accompanying your own singing), so you never get to read chords and don’t even get to play the melody.Other well-known methods encourage students to rely on playing pieces by ear or to learn by rote (by copying the teacher).',
    instructor: 'Gurkan Sarcan',
    day: 'Saturday',
    time: '14:00:00-15:00:00',
    startDate: '2020-10-17',
    duration: '12 weeks',
    cost: '400 Euro'
  }
 
 
]

Course.create(courses)
  .then(coursesFromDB =>{
    console.log(`Created ${coursesFromDB.length} courses`);
    mongoose.connection.close();

  })
  .catch(err => console.log(`An error occoured while getting courses from the DB: ${err}`));