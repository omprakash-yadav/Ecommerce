const Joi=require("@hapi/joi")
const express=require("express");
const app=express();
  
app.use(express.json());

const genres=[
     {id:1,name:"Action"},
     {id:2,name:"Horror"},
     {id:3,name:"comedy"},
     {id:4,name:"LoveStory"}
];
app.get("/api/genres",(req,res)=>{
    res.send(genres)
})
 
app.get("/api/genres/:id",(req,res)=>{
     const genre=genres.find(g=>g.id === parseInt(req.params.id));
     if(!genre)  return res.status(404).send("The genre with the given ID was not found..")
     res.send(genre)
 });

app.post("/api/genres",(req,res)=>{
    
    
    const schema={
        name:Joi.string().min(3).required()
    };
    const result=Joi.validate(req.body,schema);
    if(result.error){
        res.status(400).send(result.error.details[0].message  );
        return ;
    }

    const Genre={
     id:genres.length + 1,
     name:req.body.name
         
    };
    genres.push(Genre);
    res.send(Genre);
    
});


app.put("/api/genres/:id",(req,res)=>{
    const genre = genres.find(c => c.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send('The genre with the given ID was not found.');

    const schema={
        name:Joi.string().min(3).required()
    };
    const result=Joi.validate(req.body,schema);
    if(result.error){
        res.status(400).send(result.error.details[0].message  );
        return ;
    }
    
    genre.name=req.body.name;
    res.send(genre);

});
app.delete("/api/genres/:id",(req,res)=>{
     const genre = genres.find(g => g.id === parseInt(req.params.id));
 if(!genre) return res.status(404).send("The genra with given id was not found..");
     
     //delet
      const index=genres.indexOf(genre);
      genres.splice(index,1);

      res.send(genre)

});
 
 const port=process.env.port || 8000;
  app.listen(port, ()=> console.log(`lition on port ${port}..`));