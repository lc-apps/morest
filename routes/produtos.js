 var express = require('express');
 var router = express.Router();
 var Task=require('../models/Produtos');

router.get('/:id?',function(req,res,next){

if(req.params.id){

Produto.getProdutoById(req.params.id,function(err,rows){

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

Produto.getAllProdutos(function(err,rows){

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


 router.post('/',function(req,res,next){

Produto.addProduto(req.body,function(err,count){
  if(err)
  {
  res.json(err);
  }
  else{
  res.json(req.body);//or return count for 1 &amp;amp;amp; 0
  }
  });
 });


 router.delete('/:id',function(req,res,next){

Produto.deleteProduto(req.params.id,function(err,count){

if(err)
  {
  res.json(err);
  }
  else
  {
  res.json(count);
  }

});
 });
 router.put('/:id',function(req,res,next){

Produto.updateProduto(req.params.id,req.body,function(err,rows){

if(err)
  {
  res.json(err);
  }
  else
  {
  res.json(rows);
  }
  });
 });
 module.exports=router;
