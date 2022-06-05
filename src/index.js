//index.js
const express = require("express");

const bodyParser = require("body-parser");
const v1ClassRouter = require("./v1/routes/classRoutes");


const app = express();
const PORT = process.env.PORT || 4040;

app.use(bodyParser.json());
app.use("/api/v1/classes", v1ClassRouter);

app.listen(PORT, () => {
	console.log(`API is listening on port ${PORT}`);
});
