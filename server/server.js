const express =require('express')
app=express();
app.use('/', function (req, res) {
    res.send('hello World!')
})

app.listen('3010',function(){
    console.log('this is open port : 3010')
})