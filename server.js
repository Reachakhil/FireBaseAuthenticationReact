const express = require('express');
const path = require('path');
const app = express()
const Router = require('./router/router.js')
port = process.env.PORT ||  3001;
const cors = require('cors');
app.use(Router)
app.use(cors())

app.use(express.static(path.join(__dirname, './client/build')));
app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});


app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});