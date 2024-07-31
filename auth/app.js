const express =  require('express');
const app =  express();

console.log('Running tests');

app.get('/', async (req, res)=>{
    res.status(200).send('ok');
 });
 

const port = 3500
app.listen(port, ()=>{
    console.log(`Server is listening on PORT ${port}`)
})



