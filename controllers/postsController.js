const postsList = require("../data/posts")


//Index - get
const index = (req, res) => {
    const result = {
        data: postsList,
        count: postsList.length
    }
    res.json(result)
}

//Show - get
const show = (req, res) => {
    const postId = parseInt(req.params.id);
    const singlePost = postsList.find((curpost) => curpost.id === postId);
    res.json(singlePost);
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
    const postId = req.params.id;
    res.json("qui elimino il post id" + postId)
}

module.exports = {
    index,
    show,
    create,
    update,
    modify,
    destroy
}