var db=require('../dbconnection'); //reference of dbconnection.js

var Estabelecimentos={

getAllEstabelecimentos:function(callback){


return db.query("SELECT * FROM estabelecimentos",callback);

},




 getEstabelecimentoById:function(id,callback){
 console.log('parametro',id);
 return db.query("SELECT * FROM campanhas_produtos" +
                 " INNER JOIN campanhas ON campanhas.id = campanhas_produtos.idcampanha" +
                 " INNER JOIN produtos ON produtos.id = campanhas_produtos.idproduto" +
                 " WHERE campanhas.data_inicio <= CURDATE()"+
                 " AND campanhas.data_fim >= CURDATE()"+
                 " AND campanhas.status =1 "+
                 " AND campanhas_produtos.status =1 "+
                 " AND campanhas_produtos.idcampanha = " + id + "" ,callback);
 },


 nomeEstabelecimentos:function(nome,callback){
   console.log('parametro',nome);
  return db.query("SELECT * FROM produtos WHERE produto  " + nome + " ",callback);
 },


};
 module.exports=Estabelecimentos;
