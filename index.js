// step1
const express = require('express');

const PORT=3000;

const app = express();

app.get('/' , (req, res)=> {
    res.send('ok');
});
// step2
app.get('/test', (req, res)=>{
    res.status(200).send({status:200, message:'ok'});
});
app.get('/time', (req, res)=>{
    let time= new Date();
    res.status(200).send({status:200, message:`${time.getHours()}:${time.getMinutes()}}`})
});

app.listen(PORT, () => console.log(`server in now listening on port ${PORT}`))
