import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello, World!</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About Page</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact Page</h1>" +
        "<h2>Geoffrey Brophy</h2>" +
        "<h3>11114 Sailbrooke Dr.<br>" +
        "Riverview, FL 33579<br>" +
        "941-201-9767</h3>");
});
app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});