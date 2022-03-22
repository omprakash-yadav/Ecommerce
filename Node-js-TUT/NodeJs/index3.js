const express = require("express");
//import { Joi } from 'joi-browser';

const app = express();
//app.use(express.json())

const courses = [
    { id: 1, name: "courses1" },
    { id: 2, name: "courses2" },
    { id: 3, name: "courses3" },
    { id: 4, name: "courses4" },

]

app.get("/", (req, res) => {
    res.send("hello my dear friand ");
});
app.get("/api/courses", (req, res) => {
    res.send(courses)
});

app.post('/api/courses', (req, res) => {

    if (!req.body.name || req.body.name.length < 3) {
        res.status(404).send("Nmae is requred it shud be three carector")
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course)
    res.send(course)
})

app.get("/api/courses/:id", (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send("The course with the given id is not found. ")
    res.send(course);
});
const port = process.env.PORT || 300;
app.listen(port, () => console.log(`listning on the port ${port}... `))
