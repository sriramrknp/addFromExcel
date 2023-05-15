// Main Server

var userView = require("./routes/userRoutes");
const express = require('express');
const mongoose = require('mongoose');
const candidateRoutes = require('./routes/userRoutes');


const app = express();

// assign css and js to the html file
// since static
app.use(express.static(__dirname + "/static"));

const port = 3000;

// Our DataBase is candidates
mongoose.connect('mongodb://127.0.0.1:27017/candidates', {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB on 127.0.0.1:27017'))
.catch((err) => console.log(err));

// for sending the Home HTML file to client
app.use("/", userView);

// post of the upload file
app.use('/candidates', candidateRoutes);


app.listen(port, () =>
    console.log(`Server running on port ${port}`));
