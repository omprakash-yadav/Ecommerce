const Joi = require("@hapi/joi");
const express=require("express");
const app=express();

app.use(express.json())

const courses=[
    {id:1,name:"course"},
    {id:2,name:"course2"},
    {id:3,name:"course3"},
];
app.get("/api/courses/",(req,res)=>{
    res.send(courses);
});

app.post("/api/courses",(req,res)=>{
    const schema={
        name:Joi.string().min(3).required()
    };
    const result=Joi.validate(req.body,schema);
    if(result.error){
        res.status(400).send(result.error.details[0].message );
        return ;
    }
    const course={
        id:courses.length + 1,
        name:req.body.name
    };
    courses.push(course);
    res.send(course);
});
    

app.get("/api/courses/:id",(req,res)=>{
 const course=courses.find(courses=>courses.id === parseInt(req.params.id));
 if(!course)res.status(404).send("The course with given ID not fond..");
 res.send(course);
});

const port=process.env.port || 5000;
app.listen(port,()=>console.log(`listing on port ${port}...`))
   

