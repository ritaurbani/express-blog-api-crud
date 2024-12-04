const postsList = require("../data/posts")


//Index - get - 
const index = (req, res) => {
    // const result = {
    //     data: postsList,
    //     count: postsList.length
    // }
    // res.json(result)
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
    res.json("qui aggiungo un nuovo post")
}

//Update - put
const update = (req, res) => {
    const postId = req.params.id;
    res.json("qui aggiorno tutti i dati del post id" + postId)
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