const express = require("express"); //install first with npm
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/everyone/", (req, res) => {
    res.send("Hello Everyone. This is the everyone route!");
});

//start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
