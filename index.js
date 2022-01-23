const express = require('express');
const app = express();
const hbs=require('hbs');

require('./hbs/helpers');

const port=process.env.PORT || 3000; 

hbs.registerPartials(__dirname + '/views/partials');
//express HBS view engine
app.set('view engine', 'hbs'); 
app.get('/',(req,res)=>{
   res.render('home'); 
});

app.use(express.static(__dirname+'/public'));
app.listen(port,()=>{
  console.log(`Escuchando peticiones en el puerto ${port}` );
});