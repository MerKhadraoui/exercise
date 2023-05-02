
import express  from "express";
import path from "path"
const app =express()
const PORT =5000
app.use(express.urlencoded())
const __dirname=path.resolve()
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//GET the Home page 
app.get("/",(req,res)=>{
    console.log(req.body.username,req.body.password);

    res.sendFile(__dirname+"/public/index.html")
})
// GETabout page 
app.get("/about",(req,res)=>{
res.json({msg:"welcome to my About page",paragraph:"text"})
})
// GET contact Page 
app.get("/contact",(req,res)=>{
res.send(__dirname)
})


app.listen(PORT,()=>{
    console.log("you are listening on port "+PORT);
})

app.post("/",(req,res)=>{
console.log(req.body.username,req.body.password);
const confiPass="Meriem2023"
    if(isNaN(req.body.username)&& req.body.password===confiPass){
        res.send(` Welcome, ${req.body.username}`)
    }
    else{
        res.send(` Login failed`)

    }


})