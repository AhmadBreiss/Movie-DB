// step2
const express = require('express');

const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب', year: 1992, rating: 6.2 }
];

const PORT=3000;

const app = express();

app.get('/' , (req, res)=> {
    res.send('ok');
});
// step3
app.get('/test', (req, res)=>{
    res.status(200).send({status:200, message:'ok'});
});
app.get('/time', (req, res)=>{
    let time= new Date();
    res.status(200).send({status:200, message:`${time.getHours()}:${time.getMinutes()}}`})
});
// step4
app.get('/hello/:userID', (req, res)=>{
    res.status(200).send({status:200, message:`Hello ${req.params.userID}`})
});
app.get('/search', (req, res)=>{
    if(req.query.s){
        res.status(200).send({status:200, message:"ok", data:req.query.s})
    }else{
        res.status(500).send({status:500, error:true, message:"you have to provide a search"})
        }
});
// step5

app.get('/movies/add', (req, res) =>{
    res.send("movie add");
});

app.get ('/movies/get', (req, res)=>{
    res.status(200).send({status: 200, data:movies })
}); 

app.get('/movies/edit', (req, res)=>{
    res.send("movie edit")
})

app.get('/movies/delete', (req, res)=>{
    res.send("movie delete");
})


app.listen(PORT, () => console.log(`server in now listening on port ${PORT}`))
