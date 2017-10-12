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

// Contar todas as ofertas
*/

/*
SELECT count(produtos.id) as ofertas
              FROM campanhas_produtos
              INNER JOIN campanhas ON campanhas.id = campanhas_produtos.idcampanha
              INNER JOIN produtos ON produtos.id = campanhas_produtos.idproduto
              WHERE campanhas.data_inicio <= CURDATE( )
              AND campanhas.data_fim >= CURDATE( )
               AND campanhas.status =1
              AND campanhas_produtos.status =1

*/



// seleciona agrupado
getAllCampanhas:function(callback){
return db.query("SELECT idproduto,produto,foto1 , MIN(preco_por) as de," +
              " max(preco_por) as  ate ," +
              " count(produtos.id) as ofertas" +
              " FROM campanhas_produtos" +
              " INNER JOIN campanhas ON campanhas.id = campanhas_produtos.idcampanha" +
              " INNER JOIN produtos ON produtos.id = campanhas_produtos.idproduto" +
              " WHERE campanhas.data_inicio <= CURDATE( ) " +
              " AND campanhas.data_fim >= CURDATE( ) " +
              " AND campanhas.status =1" +
              " AND campanhas_produtos.status =1" +
              " group by produtos.id ",callback);

},




 getCampanhaById:function(id,callback){
 console.log('parametro',id);
 return db.query(" SELECT preco_de, preco_por, data_fim, produto, produtos.foto1 , nome_fantasia, estabelecimentos.foto AS logo, campanhas.id, campanhas.descricao"+
                "  FROM campanhas_produtos"+
                "  INNER JOIN campanhas ON campanhas.id = campanhas_produtos.idcampanha"+
                "  INNER JOIN produtos ON produtos.id = campanhas_produtos.idproduto"+
                "  INNER JOIN estabelecimentos ON estabelecimentos.id = campanhas.idestabelecimento"+
                "  WHERE campanhas.data_inicio <= CURDATE( ) "+
                "  AND campanhas.data_fim >= CURDATE( ) "+
                "  AND campanhas.status =1"+
                "  AND campanhas_produtos.status =1"+
                "  AND produtos.id =  " + id + " " ,callback);
},

//SELECT * FROM produtos WHERE produto like '%" + nome + "%' "
 nomeCampanha:function(nome,callback){
   console.log('parametro',nome);

  var palavras = nome.split(" ");

  var tamanho = palavras.length;
  console.log('palavras',palavras);
  console.log('tamanho',tamanho);

  var sql = "SELECT idproduto,produto,foto1 , MIN(preco_por) as de,";
  sql += sql =" max(preco_por) as  ate , count(produtos.id) as ofertas FROM campanhas_produtos";
  sql += sql =" INNER JOIN campanhas ON campanhas.id = campanhas_produtos.idcampanha  INNER JOIN produtos ON produtos.id = campanhas_produtos.idproduto  WHERE campanhas.data_inicio <= CURDATE( )";
  sql += sql =" AND campanhas.status =1 AND campanhas_produtos.status =1 ";

  for (i = 0; i < palavras.length; i++) {
    sql += sql = " AND produto like '%";
    sql += sql = palavras[i];
    sql += sql ="%' ";
    }



  sql += sql =" group by produtos.id ";


  console.log('sql',sql);

  return db.query(sql,callback);
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
