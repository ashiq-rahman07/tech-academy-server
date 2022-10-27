const express= require ('express')
const app = express();
const cors = require('cors');
const port = process.env.port || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const courseDetails = require('./data/CourseDetails.json')

app.get('/',(req, res)=>{
    res.send('Learning API Running');
})

app.get('/course-categories',(req, res)=>{
    res.send(categories);
})
app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '04') {
        res.send(courseDetails);
    }
    else {
        const category_news = news.filter(n => n.category_id === id);
        res.send(courseDetails);
    }
})

app.get('/course-details', (req, res) => {
    res.send(courseDetails);
});

app.get('/course-details/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courseDetails.find(n => n._id === id);
    res.send(selectedCourse);
});

app.listen(port, ()=>{
    console.log('Course Server running on port', port);
})