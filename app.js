const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const sequelize = require('./utils/database');
const userRouter = require('./routes/userRouter');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use("/", userRouter);
app.use("/user", userRouter);


sequelize
.sync()
.then((result) => {
    app.listen(3000);
})
.catch((err) => console.log(err));