const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();
const cors = require("cors");//האם אני מאפשר גישה לקוד שלי מכתובות מסויימות
//const Auths = require("./API/V1/middleware/Auths");
const morgan = require("morgan");
app.use(cors());
app.use(morgan("dev")); 
app.use(express.json());
require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
// Setup server port
//const port = process.env.PORT || 1433;

//const express = require('express');
//const bodyParser = require('body-parser');

// create express app
//const app = express();

// Setup server port
//const port = process.env.PORT || 3306;

// parse requests of content-type - application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
//app.use(bodyParser.json())

// define a root route
//app.get('/', (req, res) => {
  //res.send("Hello World");
//});
//const meeting = require('./API/V1/routes/Meeting')

// using as middleware
//app.use('./API/V1/routes/meeting', meeting)

// Require employee routes
const Meeting = require('./API/V1/routes/Meeting')
const User = require('./API/V1/routes/User');
const Utility = require('./API/V1/routes/Utility')
const Shop = require('./API/V1/routes/Shop')

// using as middleware
app.use('/meeting', Meeting)

app.get("/meeting");//הצגת כל הפגישות
app.get("/Meeting/:Mid");//הצגת פגישה
app.post("/Meeting");//הוספת פגישה
app.put("/Meeting/:Mid");//עדכון פגישה
app.delete("/Meeting/:Mid");//מחיקת פגישה

app.use('/user', User)
app.get("/User");//הצגת כל המשתמשים
app.get("/User/:Uid");//הצגת משתמש
app.post("/User");//הוספת משתמש
app.put("/User/:Mid");//עדכון משתמש
app.delete("/User/:Mid");//מחיקת משתמש

app.use('/utility', Utility)
app.get("/Utility");// הצגת כל המוצרים/שירותים
app.get("/Utility/:Utid");//הצגת מוצר/שירות
app.post("/Utility");//הוספת מוצר/שירות
app.put("/Utility/:Mtid");//עדכון מוצר/שירות
app.delete("/Utility/:Mtid");//מחיקת מוצר/שירות



app.get("/shop");//הצגת כל המספרות
app.get("/shop/:Sid");//הצגת מספרה
app.post("/shop");//הוספת מספרה
app.put("/shop/:Sid");//עדכון מספרה
app.delete("/shop/:Sid");//מחיקת מספרה
app.use('/shop', Shop);

module.exports= app;