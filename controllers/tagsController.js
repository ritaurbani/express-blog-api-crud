//Creo API per tags, voglio solo index

const postsList = require("../data/posts");


const index = (req, res) => {

const tags = [];
postsList.forEach((post)=> {
    post.tags.forEach((tag)=>{
        if (!tags.includes(tag)) {
            tags.push(tag)
        }
    })

})
res.json({
    tags,
    totale: tags.length
});

}

module.exports = {
    index
}




