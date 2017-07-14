var mysql=require('mysql');
var connection=mysql.createPool({

host:'mysql02.hstbr.net',
 user:'multiofertas',
 password:'msualt2017',
 database:'multiofertas_bd'

});
 module.exports=connection;
