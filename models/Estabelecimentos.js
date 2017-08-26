var db=require('../dbconnection'); //reference of dbconnection.js

var Estabelecimentos={

getAllEstabelecimentos:function(callback){


return db.query("SELECT * FROM estabelecimentos",callback);

},




 getEstabelecimentoById:function(id,callback){
 console.log('parametro',id);
 return db.query("select * from estabelecimentos where Id=?",[id],callback);
 },


 nomeEstabelecimentos:function(nome,callback){
   console.log('parametro',nome);
  return db.query("SELECT * FROM estabelecimentos WHERE nome_mercado like '%" + nome + "%' ",callback);
 },


};
 module.exports=Estabelecimentos;
