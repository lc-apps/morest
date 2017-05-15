 var express = require('express');
 var router = express.Router();
 var Campanhas=require('../models/Campanhas');

router.get('/:id?',function(req,res,next){

if(req.params.id){

Campanhas.getCampanhaById(req.params.id,function(err,rows){

if(err)
  {
  res.json(err);
  }
  else{
  res.json(rows);
  }
  });
 }

 else{

Campanhas.getAllCampanhas(function(err,rows){

if(err)
  {
  res.json(err);
  }
  else
  {
    res.json(rows);

  }

 });
 }
 });


 router.get('/nome/:nome?',function(req,res,next){

Campanhas.nomeCampanha(req.params.nome,function(err,rows){

if(err)
  {
  res.json(err);
  console.log('teste',err);
  }
  else
  {
  res.json(rows);
  }

});
 });




 module.exports=router;
