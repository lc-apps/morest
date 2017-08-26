 var express = require('express');
 var router = express.Router();
 var Estabelecimentos = require('../models/Estabelecimentos');

 router.get('/:id?', function(req, res, next) {

     if (req.params.id) {

         Estabelecimentos.getEstabelecimentoById(req.params.id, function(err, rows) {
             if (err) {
                 res.json(err);
             } else {
                 res.json(rows);
             }
         });
     } else {

         Estabelecimentos.getAllEstabelecimentos(function(err, rows) {
           console.log('entrou no getAllEstabelecimentos');
             if (err) {
                 res.json(err);
             } else {
                 res.json(rows);

             }

         });
     }
 });


 router.get('/nome/:nome?', function(req, res, next) {

     Estabelecimentos.nomeEstabelecimentos(req.params.nome, function(err, rows) {

         if (err) {
             res.json(err);
             console.log('teste', err);
         } else {
             res.json(rows);
         }

     });
 });



 module.exports = router;
