const express=require("express");
const app=express();
const bodyParser=require("body-parser")

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs")

app.get("/",function(req,res){
    res.render("landing.ejs");
})
// app.listen(process.env.PORT, process.env.IP, function(){
//     console.log("server started")
// })
let campgrounds=[
    {name: "dog",image:"https://images.unsplash.com/photo-1498579687545-d5a4fffb0a9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },
    {name: "rabbit",image:"https://images.unsplash.com/photo-1564013434775-f71db0030976?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
    {name: "dog",image:"https://images.unsplash.com/photo-1542840843-3349799cded6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },
    {name: "dog",image:"https://images.unsplash.com/photo-1498579687545-d5a4fffb0a9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },
    {name: "rabbit",image:"https://images.unsplash.com/photo-1564013434775-f71db0030976?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
    {name: "dog",image:"https://images.unsplash.com/photo-1542840843-3349799cded6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },
    {name: "dog",image:"https://images.unsplash.com/photo-1498579687545-d5a4fffb0a9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },
    {name: "rabbit",image:"https://images.unsplash.com/photo-1564013434775-f71db0030976?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
    {name: "dog",image:"https://images.unsplash.com/photo-1542840843-3349799cded6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" }
     
]

app.get("/campgrounds",function(req,res){
    res.render("campgrounds.ejs",{campgrounds:campgrounds});
    // console.log(campgrounds)
})

app.post("/campgrounds", function(req,res){

    let name=req.body.name;
    let image=req.body.image;
    let newCampground={name:name,image:image}
    campgrounds.push(newCampground);
    res.redirect("/campgrounds")
//    console.log(campgrounds)
})

app.get("/campgrounds/new",function(req,res){
    res.render("new.ejs")
    
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    console.log("server started")
})