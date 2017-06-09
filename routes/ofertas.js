 var express = require('express');
 var router = express.Router();
 var Ofertas = require('../models/Ofertas');

 router.get('/:id?', function(req, res, next) {

     if (req.params.id) {

         Ofertas.getOfertasById(req.params.id, function(err, rows) {

             if (err) {
                 res.json(err);
             } else {
                 res.json(rows);
             }
         });
     } else {

         Ofertas.getAllOfertas(function(err, rows) {
             if (err) {
                 res.json(err);
             } else {
                 res.json(rows);

             }

         });
     }
 });


 router.get('/nome/:nome?', function(req, res, next) {

     Ofertas.nomeOfertas(req.params.nome, function(err, rows) {

         if (err) {
             res.json(err);
             console.log('teste', err);
         } else {
             res.json(rows);
         }

     });
 });



 module.exports = router;
