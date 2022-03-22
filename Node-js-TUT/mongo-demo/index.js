const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/plaground")
 .then(()=>console.log("conected to mongoDB...."))
 .catch(err=>console.error("couid not conected mongoDB...",err))
 //schema
 const CourseSchema= new mongoose.Schema({
     name:String,
     auther:String,
     tags:[String],
     date:{type: Date, default:Date.now},
     isPublished:Boolean
    });
 //models
const Course=mongoose.model("Course",CourseSchema);
async function CreateCourse () {
    const course= new Course({
     name:"Angular Course",
     auther:"mosh",
     tags:["angular","frontend"],
     isPublished:true 

    });
  const result = await course.save();
  console.log(result)   
}
//CeateCourse();
//retrive the document
//filtering the document
async function getCourse() {
    const courses=await Course
      .find({auther:"mosh",isPublished:true})
      .limit(10)
      .sort({name:1})
      .select({name:1,tags:1})
      .count();
    console.log(courses);
    
}
getCourse();
