//Inizializziamo
const express = require("express");
const app = express();
const port = 3000;
//Import
const handleError = require("./middleware/handleError")
const postsRouter = require("./routers/posts")
const tagsRouter = require("./routers/tags")

//bodyParser
app.use(express.json())

//Comunichiamo esistenza rotte
app.use("/posts", postsRouter);
app.use("/tags",tagsRouter)

app.get("/", (req, res)=>{
    // ciao();
    res.send("Hello");
})

app.use(handleError)

app.listen(port, ()=>{
    console.log("Il server e'partito");
})


