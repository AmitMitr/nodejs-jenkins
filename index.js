const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
app.use(express.static('public'));

app.get('/' , function(req,res){
    res.send('NodeJs Express App via Jenkins . Lets tryu to build this again')
})

app.listen(PORT , ()=> {
    console.log(`Server running at port ${PORT}`)
})