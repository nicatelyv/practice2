const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const dotenv = require("dotenv")

dotenv.config();

const app = express()
app.use(cors());
app.use(bodyParser.json());

mongoose.set('strictQuery', false);
mongoose.connect(process.env.CONNECTION_URL)
.then(()=> console.log("Database Connected"))

app.listen(process.env.PORT ,console.log("Server Started"))


const {Schema} = mongoose
 
const OurTeachersSchema = new Schema({
    imgUrl:{type:String , required:true},
    name:{type:String , required:true},
    title:{type:String , required:true},
    description:{type:String , required:true},
})
 
const OurTeachers = mongoose.model("OurTeachers" , OurTeachersSchema)

//All Data
app.get("/users", (req,res)=>{
    OurTeachers.find({},(err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            res.status(404).json({message: err})
        }
    })
})

//Data by id
app.get("/users/:id", (req,res)=>{
    const {id} = req.params;
    OurTeachers.findById(id,(err,doc)=>{
        if(!err){
            if(doc){
                res.send(doc)
                res.status(200)
            }else{
                res.status(404).json({message:err})
            }
        }
    })
})

//Post Data
app.post("/users", (req,res)=>{
    let teacher = new OurTeachers({
        imgUrl:req.body.imgUrl,
        name:req.body.name,
        title:req.body.title,
        description:req.body.description
    })
    teacher.save()
    res.send({message:"Successfull"})
})

//Delete data
app.delete("/users/:id",(req,res)=>{
    const {id} = req.params;
    OurTeachers.findByIdAndDelete(id,(err,doc)=>{
        if(!err){
            res.send({message:"Successfull"})
        }else{
            res.status(404).json({message:err})
        }
    })
})