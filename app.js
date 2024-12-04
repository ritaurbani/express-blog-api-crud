//Inizializziamo
const express = require("express");
const app = express();
const port = 3000;

//Comunichiamo esistenza rotte
const postsRouter = require("./routers/posts")
app.use("/posts", postsRouter)

app.get("/", (req, res)=>{
    res.send("Hello")
})

app.listen(port, ()=>{
    res.send("Il server e'partito")
})