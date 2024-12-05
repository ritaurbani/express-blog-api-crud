//Inizializziamo
const express = require("express");
const app = express();
const port = 3000;

//bodyParser
app.use(express.json())

//Comunichiamo esistenza rotte
const postsRouter = require("./routers/posts")
app.use("/posts", postsRouter)

app.get("/", (req, res)=>{
    res.send("Hello");
})

app.listen(port, ()=>{
    console.log("Il server e'partito");
})