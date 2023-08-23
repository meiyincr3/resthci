var express = require('express');
var router = express.Router();

/* IMPORTE El ARCHIVO CON EL MODELO */
const claseCurso = require('../models').curso;


router.get('/findAll/json', function (req, res, next) {
 /* const { rol } = req.user;

  if (rol !== 'admin') {
      return res.sendStatus(403);
  }*/

  /* MÉTODO ESTÁTICO findAll  */
  claseCurso.findAll({
    /*attributes: { exclude: ["nombre"] },*/
  })
  .then(resultado => {
      res.json(resultado);
  })
  .catch(error => res.status(400).send(error))

});

//  Agregar un nuevo Curso
router.post('/save', function(req, res, next) {
  const { idcurso, nombre_curso, descripcion_curso, nivel_dificultad, profesor} = req.body;

  claseCurso.create({ idcurso, nombre_curso, descripcion_curso, nivel_dificultad, profesor })
    .then(curso => {
      res.status(201).json(curso);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Error al crear el Curso' });
    });
});

// READ - Curso por ID
router.get('/findById/:id/json', function(req, res, next) {  

  let id = req.params.id;

  claseCurso.findByPk(id)
      .then(instancia => {
        if(instancia) {
          res.status(200).json(instancia);
        } else {
          res.status(404).json({error: "No existe registro con el identificador "+id})
        }
      })
      .catch(error => res.status(400).send(error))
});



// UPDATE - Actualizar un Curso por ID
router.put('/update/:id', function(req, res, next) {  

  let id = req.params.id;

  claseCurso.findByPk(id)
    .then(instancia => {
      //console.log(instancia)
      if(instancia) {

        instancia.update(req.body)
          .then(instanciaActualizada => {
            res.status(201).json(instanciaActualizada);
          })
          .catch(error => {
            res.status(500).json({ error: 'Error al actualizar el registro' });
          });

      } else {
        res.status(404).json({error: "No existe registro con el identificador "+id})
      }
    })
    .catch(error => res.status(400).send(error))

});

// DELETE - Eliminar un Curso por ID
router.delete('/delete/:id', function(req, res, next) {  

  let id = req.params.id;

  claseCurso.findByPk(id)
    .then(instancia => {
      if(instancia) {

        instancia.destroy()
          .then(() => {
            res.status(204).json({ mensaje: 'Registro eliminado'});
          })
          .catch(error => {
            res.status(500).json({ error: 'Error al actualizar el registro' });
          });

      } else {
        res.status(404).json({error: "No existe registro con el identificador "+id})
      }
    })
    .catch(error => res.status(400).send(error))

});




module.exports = router;