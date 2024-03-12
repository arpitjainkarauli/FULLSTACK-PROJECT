const express = require("express")
var cors = require('cors')
const app = express();
app.use(cors());

app.get("/",(req,res)=>{
    res.send("home page")
})

app.get("/about",(req,res)=>{
    res.send("about page")
})

app.get("/login",(req,res)=>{
    res.send("login page")
})
app.get("/api/user",(req,res)=>{
    const user = [

        {
            id:1,
            name:"ashutosh jain",
            stream:"CEO",
            src:"https://i.postimg.cc/Pf0gtjyh/tonu-bhaiya.jpg"
            },

        {
        id:2,
        name:"arpit jain",
        stream:"web dev",
        src:"https://i.postimg.cc/50DM2qqt/IMG-20240221-003305-204-removebg-preview.png"
        },
        {
            id:3,
            name:"kapil sharma",
            stream:"web dev",
            src:"https://i.postimg.cc/bNGS3TjQ/k.jpg"
        },
        {
                id:4,
                name:"karan singh",
                stream:"web dev",
            src:"https://i.postimg.cc/Z5Fm346h/i2-removebg.png"
        },
        {
            id:5,
            name:"shivam sharma",
            stream:"web dev",
            src:"https://i.postimg.cc/4yHYkg5n/shivam.png"
        },
        {
            id:6,
            name:"tanishk jain",
            stream:"web dev",
            src:"https://i.postimg.cc/nLfryTW8/IMG-20240220-111228-removebg-preview.png"
        }

    ]
    res.send(user)

})

app.listen(5000, () =>{
    console.log("app listen port number 5000");
})