 var express = require('express');
 var router = express.Router();
 var Produtos=require('../models/Produtos');

router.get('/:id?',function(req,res,next){

if(req.params.id){

Produtos.getProdutoById(req.params.id,function(err,rows){

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

Produtos.getAllProdutos(function(err,rows){

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

Produtos.nomeProduto(req.params.nome,function(err,rows){

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
