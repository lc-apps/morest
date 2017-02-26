var mysql=require('mysql');
var connection=mysql.createPool({

host:'mysql05.hstbr.net',
 user:'multiofertas',
 password:'msualt2016',
 database:'multiofertas_bd'

});
 module.exports=connection;
