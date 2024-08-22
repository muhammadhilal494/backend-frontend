import express from "express";

const app = express()

app.use(express.static('dist'))
// app.get("/", (req, res) =>{
//     res.send("Server is ready")
// })

app.get("/api/quotes", (req, res) =>{
    const quotes = [
        {
            text: "The only way to do great work is to love what you do.",
            author: "Steve Jobs",
            id: 1
        },
        {
            text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            author: "Winston Churchill",
            id: 2
        },
        {
            text: "You miss 100% of the shots you don't take.",
            author: "Wayne Gretzky",
            id: 3
        },
        {
            text: "Whether you think you can or you think you can't, you're right.",
            author: "Henry Ford",
            id: 4
        },
        {
            text: "The future belongs to those who believe in the beauty of their dreams.",
            author: "Eleanor Roosevelt",
            id: 5
        }
    ];    
    
    res.send(quotes)
})


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
    }
);