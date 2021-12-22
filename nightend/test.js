
var express = require('express')
var cors = require('cors')
require('dotenv').config()
var app = express()
var CryptoJS = require("crypto-js");
const port = (process.env.PORT || 5000);
path = require('path');

const { MongoClient } = require('mongodb');

const uri = process.env.MURL;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const jwt = require('jsonwebtoken');



async function entryInsert(name,password) {

    await client.connect();
    const db = client.db("nightbase");

    const user = await db.collection("User");

    const username = await user.find({ name: name }).toArray();

    if(username.length==0){
      const userCred = {
        name: name,
        password: password,
      }

      const insert = await user.insertOne(userCred);
      return {"Status":"New user account created.","JWT":generateAccessToken(name)}
    }

    if(username[0].password != password){
      return {"Status":"Wrong password!"}
    };

    //await client.close();
    return {"Status":"Successfully entered.","JWT":generateAccessToken(name)};
  
}

async function messageInsert(name,message,title,time) {

  await client.connect();
  const db = client.db("nightbase");

  const messages = await db.collection("Messages");

  const messageObject = {
      name: name,
      message: message,
      title: title,
      time: time
    }

  const insert = await messages.insertOne(messageObject);
    
  if(message.length==0){
    return {"Error":"[ Empty message! ]"}
  };

  if(title.length==0){
    return {"Error":"[ Empty title! ]"}
  };

  //await client.close();
  return {"Status":"Successfully entered."};
}

async function messageGet(name) {

  await client.connect();
  const db = client.db("nightbase");

  const messages = await db.collection("Messages");

  const diaries = await  messages.find(
    {name: name },
    { projection:{message:1,title:1,time:1,_id: 0 }}
).toArray();
 

  return {"Diaries":diaries};
}

async function deleteMsg(time) {

  await client.connect();
  const db = client.db("nightbase");

  const messages = await db.collection("Messages");

  const deleteQuery = await  messages.deleteOne({time: time });
    
  //await client.close();
  return {"Status":"Deleted."};
}


function generateAccessToken(username) {
  return jwt.sign({username:username}, process.env.SECRET, { expiresIn: '1000s' });
}

app.use(cors())
app.use(express.json())
app.listen(port, () => console.log(`Listening on port ${port}`)); 

app.use(express.static(path.join(__dirname, '../Night-Diary/build')));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../Night-Diary/build/index.html'));
});


app.post('/entry', (req, res) => { 
  const username = req.body.username;
  const password = CryptoJS.SHA256(req.body.password).toString();
  entryInsert(username,password).then(auth => res.send(auth));

}); 

app.post('/new', (req,res)=>{

  const message=req.body.message;
  const title=req.body.title;
  const time=req.body.time;
  const name=req.body.name;

  messageInsert(name,message,title,time).then(msg => res.send(msg));
})

app.post('/diaries', (req,res)=>{

  const name=req.body.name;

  messageGet(name).then(msg => res.send(msg));
})

app.post('/delete',(req,res)=>{
  const time=req.body.time;

  deleteMsg(time).then(status => res.send(status));

})

app.post('/authorise',(req,res)=>{
  console.log("Entered authorise");
  const authHeader = req.headers.authorization;
  console.log("Entered authenticateJWT");
  if (authHeader) {
      const token = authHeader.split(' ')[1];

      jwt.verify(token, process.env.SECRET, (err, user) => {
          if (err) {
              return res.sendStatus(403);
          }

          req.user = user;
          console.log(user.username);
          res.send(user);
          
      });
  } else {
      res.sendStatus(401);
  }
  
  
})

