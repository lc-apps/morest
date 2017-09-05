var db=require('../dbconnection'); //reference of dbconnection.js

var Campanhas={

// normal
 /*
getAllCampanhas:function(callback){


return db.query("SELECT * FROM campanhas_produtos" +
                " INNER JOIN campanhas ON campanhas.id = campanhas_produtos.idcampanha" +
                " INNER JOIN produtos ON produtos.id = campanhas_produtos.idproduto" +
                " WHERE campanhas.data_inicio <= CURDATE()"+
                " AND campanhas.data_fim >= CURDATE()"+
                " AND campanhas.status =1 "+
                " AND campanhas_produtos.status =1 ",callback);

},
*/
// seleciona agrupado
getAllCampanhas:function(callback){
return db.query("SELECT*, MIN(preco_por) as de,"+
              "max(preco_por) as 'até',"+
              "count(produtos.id) as ofertas,"+
              "count(idestabelecimento) as mercados"+
              "FROM campanhas_produtos"+
              "INNER JOIN campanhas ON campanhas.id = campanhas_produtos.idcampanha"+
              "INNER JOIN produtos ON produtos.id = campanhas_produtos.idproduto"+
              "WHERE campanhas.data_inicio <= CURDATE( ) "+
              "AND campanhas.data_fim >= CURDATE( ) "+
              "AND campanhas.status =1"+
              "AND campanhas_produtos.status =1"+
              "group by produtos.id.status =1"+
              "group by produtos.id ",callback);

},




 getCampanhaById:function(id,callback){
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


 nomeCampanha:function(nome,callback){
   console.log('parametro',nome);
  return db.query("SELECT * FROM produtos WHERE produto  " + nome + " ",callback);
 },


};
 module.exports=Campanhas;
/*

$sql = "SELECT * FROM campanhas_produtos ";
$sql .= " INNER JOIN campanhas ON campanhas.id = campanhas_produtos.idcampanha";
$sql .= " INNER JOIN produtos ON produtos.id = campanhas_produtos.idproduto";
$sql .= " WHERE campanhas.data_inicio <= CURDATE()";
$sql .= " AND campanhas.data_fim >= CURDATE()";
$sql .= " AND campanhas.status =1 ";
$sql .= " AND campanhas_produtos.status =1 ";

*/
