const express = require('express');
const app = express();
const port = 8000;
const jsonData = require('./db.json');
const teas = jsonData.teas;

// cors許可
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// 
app.get('/', (req, res) => {
  res.json(teas);
});

// id検索
app.get('/teas/:id', (req, res) => {
  let tea = teas.find(e => e.id === parseInt(req.params.id));
  res.json(tea);
})

// tag検索
app.get('/teas_tag/:tag', (req, res) => {
  let teaTag = teas.filter(e => e.tag === req.params.tag);
  res.json(teaTag);
})

// caffeine検索
app.get('/teas_caffeine/:caffeine', (req, res) => {
  let teacaffeine = teas.filter(e => e.caffeine === req.params.caffeine);
  res.json(teacaffeine);
})


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

