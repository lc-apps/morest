var db=require('../dbconnection'); //reference of dbconnection.js

var Ofertas={

getAllOfertas:function(callback){


return db.query(" SELECT campanhas.descricao AS camp_desc, data_inicio, data_fim,"+
                " estabelecimentos.nome_fantasia AS nome_mercado, estabelecimentos_tipos.descricao AS tipo_comercio FROM campanhas" +
                " INNER JOIN estabelecimentos ON estabelecimentos.id = campanhas.idestabelecimento" +
                " INNER JOIN estabelecimentos_tipos ON estabelecimentos_tipos.id = estabelecimentos.idtipo" +
                " WHERE campanhas.data_inicio <= CURDATE()"+
                " AND campanhas.data_fim >= CURDATE()"+
                " AND campanhas.status =1 " ,callback);

},




 getOfertasById:function(id,callback){

return db.query("select * from produtos where Id=?",[id],callback);
 },


 nomeOfertas:function(nome,callback){
   console.log('parametro',nome);
  return db.query("SELECT * FROM produtos WHERE produto like '%" + nome + "%' ",callback);
 },


};
 module.exports=Ofertas;
/*

$sql = "SELECT * FROM campanhas_produtos ";
$sql .= " INNER JOIN campanhas ON campanhas.id = campanhas_produtos.idcampanha";
$sql .= " INNER JOIN produtos ON produtos.id = campanhas_produtos.idproduto";
$sql .= " WHERE campanhas.data_inicio <= CURDATE()";
$sql .= " AND campanhas.data_fim >= CURDATE()";
$sql .= " AND campanhas.status =1 ";
$sql .= " AND campanhas_produtos.status =1 ";

*/
