import express from "express";
import ejs from "ejs";

const app = express();
const port = 3000;
app.get("/", (req, res) => {
    const data = {
        title: "EJS Tags",
        seconds: new Date().getSeconds(),
        items: ["Apple", "Orange", "Banana"],
        htmlContent: "<em>This is some em text</em>",
    };
    res.render("index.ejs", data);
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});