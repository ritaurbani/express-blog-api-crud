const postsList = require("../data/posts")


const checkPostExists = (req, res, next) => {
    console.log("middleware funziona")
    const id = parseInt(req.params.id)
    const post = postsList.find((curpost) => curpost.id === id);
    if (post) {
        next();
    } else {
        res.statusCode = 404
        res.json({
            error: true,
            message: "Not found at all"
        })
    }
}

module.exports = checkPostExists;