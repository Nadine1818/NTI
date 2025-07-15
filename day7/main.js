const express = require('express');
const app = express();
const fs = require ('fs');
const { title } = require('process');
app.use(express.json()); //parse request body to json
const dataBase = fs.readFileSync(`${__dirname}/dataBase.json`,'utf-8');
let posts = JSON.parse(dataBase);

//getPosts
const getPosts =(req,res)=>{
    res.status(200).json(posts);
}

//getPosts by id parameter 
const getPostsById = (req,res)=>{
    const id = parseInt(req.params.id);
    const post = posts.find(p=>p.id === id);
    res.status(200).json(post);
}

//creatPost
const createPost = (req,res)=>{
    const newPost = {
        userId : req.body.userId,
        id:posts.length?posts[posts.length-1].id+1:1,
        title : req.body.title,
        body : req.body.body
    };

    posts.push(newPost);
    fs.writeFileSync(`${__dirname}/dataBase.json`, JSON.stringify(posts, null, 2), 'utf-8');
    res.status(201).json(newPost);
}

//modify post
const modifyPost = (req,res)=>{
    const id = parseInt(req.params.id);
    const index = posts.findIndex(p=>p.id === id);
    posts[index] = {
        id:id,
        userId: req.body.userId,
        title:req.body.title,
        body:req.body.body
    }
    res.status(200).json(posts[index]);

    fs.writeFileSync('./dataBase.json',JSON.stringify(posts,null,2),'utf-8');
}

//delete post 
const deletePost = (req,res)=>{
    const id = parseInt(req.params.id);
    const index = posts.findIndex(p=>p.id === id);
    const deletedPost=posts.splice(index,1);
    if (index === -1) {
        return res.status(404).json({ message: 'Post not found' }); // Not found
    }
   
    fs.writeFileSync('./dataBase.json',JSON.stringify(posts,null,2),'utf-8');
     res.status(200).json(deletedPost);
}

//patch (partially update post)
const updatePost = (req,res)=>{
    const id= parseInt(req.params.id);
    const index = posts.findIndex(p=>p.id === id);
     if(!posts[index]){
        return res.status(404).json({message:'post not found'});
     }

     if(req.body.userId !== undefined){
        posts[index].userId = req.body.userId;
     }

     if(req.body.title !== undefined){
        posts[index].title = req.body.title;
     }

      if(req.body.body !== undefined){
        posts[index].body = req.body.body;
     }

     fs.writeFileSync('./dataBase.json',JSON.stringify(posts,null,2),'utf-8');
     res.status(200).json(posts[index]);


}

// app.get('/posts',getPosts);
// app.get('/posts/:id',getPostsById);
// app.post('/posts',createPost);
// app.put('/posts/:id',modifyPost)
// app.delete('/posts/:id',deletePost);
// app.patch('/posts/:id',updatePost);

app.route('/posts')
.get(getPosts)
.post(createPost)

app.route('/posts/:id')
.get(getPostsById)
.put(modifyPost)
.delete(deletePost)
.patch(updatePost)

const port =8000;
app.listen(port,()=>{
    console.log("server listen");
})
