const postsList = require("../data/posts")


//Index - get - 
const index = (req, res) => {
    const queryString = req.query;
    let filteredPostsList = postsList;
    if(queryString.tags!==undefined) {
        filteredPostsList = postsList.filter((curpost) => curpost.tags.includes(queryString.tags))
        const result = {
            posts: filteredPostsList,
            count:filteredPostsList.length
        }
        res.json(result)
    } else {
        res.json(postsList)  
    }  
}

//Show - get
const show = (req, res) => {
    const postId = parseInt(req.params.id);
    const singlePost = postsList.find((curpost) => curpost.id === postId);
    if(singlePost===undefined){
        res.sendStatus(404);
        res.json({
            error:true,
            messages:"Post Not Found"
        })
    } else {
    res.json(singlePost);
}
}

//Create - post
const create = (req, res) => {
    console.log(req, res);

    const newPost = req.body;

    console.log(newPost);

    const lastItemIndex = postsList.length -1;
    const lastItem = postsList[lastItemIndex];
    newPost.id = lastItem.id +1
    postsList.push(newPost);

    res.json(newPost);
}

//Update - put
const update = (req, res) => {
    //recupero il parametro id del post da aggiornare e lo converto in numero
    const postId = parseInt(req.params.id);
    //uso find per recuperare post to modify
    const postToUpdate = postsList.find((curPost)=>curPost.id===postId)
    if(postToUpdate===undefined) {
        res.status(404);
        res.json({
            error:"Not Found"
        })
    } 
    //aggiorno post con dati ricevuti nel body della richiesta
    postToUpdate.titolo = req.body.titolo;
    postToUpdate.contenuto = req.body.contenuto;
    postToUpdate.tags = req.body.tags;
    
   //restituisco pizza aggiornata
    res.json(postToUpdate)
}

const update1 = (req, res) => {
    const postId = parseInt(req.params.id);
    const postToUpdate = req.body;
    const indexToUpdate = postsList.findIndex((curPost) => curPost.id === postId);
    postToUpdate.id = postId;//non lo assegno sopra?
    postsList[indexToUpdate] = postToUpdate

    res.json(postToUpdate)
}

//Modify - patch
const modify = (req, res) => {
    const postId = req.params.id;
    res.json("qui aggiorno solo alcuni dati del post id" + postId)
}

//Destroy - delete
const destroy = (req, res) => {
    const postId = parseInt(req.params.id);
    const postToCancelIndex= postsList.findIndex((curPost)=>curPost.id === postId)
    //controllo
    if(postToCancelIndex===-1){
        res.sendStatus(404);
        res.json({
            error:true,
            message:"Not Found"
        })
    } else {
    postsList.splice(postToCancelIndex, 1)
    console.log(postsList);
    res.sendStatus(204);
}
}

module.exports = {
    index,
    show,
    create,
    update,
    modify,
    destroy
}