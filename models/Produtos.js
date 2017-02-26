var db=require('../dbconnection'); //reference of dbconnection.js

var Produtos={

getAllProdutos:function(callback){

return db.query("Select * from produtos",callback);

},

 getPrudutoById:function(id,callback){

return db.query("select * from produtos where Id=?",[id],callback);
 },

 addProduto:function(Task,callback){
 return db.query("Insert into produtos values(?,?,?)",[Produto.Id,Produto.Nome,Produto.Status],callback);
 },

 deleteProduto:function(id,callback){
  return db.query("delete from produtos where Id=?",[id],callback);
 },

 updateProduto:function(id,Task,callback){
  return db.query("update produtos set Nome=?,Status=? where Id=?",[Produto.Nome,Produto.Status,id],callback);
 }

};
 module.exports=Produtos;
