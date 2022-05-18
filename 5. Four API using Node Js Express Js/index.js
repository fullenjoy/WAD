//Open windows cmd in current directory
//type : npm init -y
//npm install express
// Now type 
// node .
//After saving this file index.js
//Go to browser and enter 
//localhost:8080
//localhost:8080/courses
//localhost:8080/courses/1
//localhost:8080/courses/2
//localhost:8080/home

const { rmSync } = require("fs");
const { parse } = require("path");

const app = require("express")();
const port = 8080;

const courses = [
    { id: 1, name: "WAD" },
    { id: 2, name: "os" },
];

app.get("/", (req, res) => {
    res.write("Hello");
    res.end();
});

app.get("/courses", (req, res) => {
    res.send(courses);
    res.end();
});

app.get("/courses/:id", (req, res) => {
    const course = courses.find((c) => c.id === parseInt(req.params.id));
    res.send(course);
    res.end();
});

app.get("/home", (req, res) => {
    res.write("<h1> Welcome </h1>");
    res.end();
});
app.listen(port, () => console.log("Server is listening"));