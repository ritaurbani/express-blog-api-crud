//Inizializziamo
const express = require("express");
const app = express();
const port = 3000;
//Import
const postsList = require("./data/posts")
const handleError = require("./middleware/handleError")
const postsRouter = require("./routers/posts")
const tagsRouter = require("./routers/tags")
const corsMiddleware = require("cors")

//bodyParser
app.use(express.json())
//static for imgs
app.use(express.static("public"));
//Diamo permesso a questo indirizzo di richiedere i dati - chiamiamo cors come funzione con parametro
app.use(corsMiddleware({
    origin: "http://127.0.0.1:5501"    

}))

//Comunichiamo esistenza rotte
app.use("/posts", postsRouter);
app.use("/tags",tagsRouter)

app.get("/", (req, res)=>{
    // ciao();
    res.json("Hello");
})

app.use(handleError)

app.listen(port, ()=>{
    console.log("Il server e'partito");
})


