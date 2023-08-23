var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
/* MÓDULO dotenv */
const dotenv = require('dotenv');

/* CARGA DE DATOS DE CONFIGURACION EN MEMORIA */
dotenv.config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

/* CARGA DEL MIDDLEWARE authenticateJWT */
var authenticateJWT = require('./middleware/auth');

var app = express();

//referencia al manejador de rutas
var webhciRouter = require('./routes/rest_webhci');
var profesorRouter = require('./routes/rest_profesor');
var cursoRouter = require('./routes/rest_curso');

/* AGREGUE EL MIDDLEWARE CORS */
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/rest/webhci/', webhciRouter);
app.use('/rest/profesor/', profesorRouter);
app.use('/rest/curso/', cursoRouter);

/* USE LA FUNCIÓN authenticateJWT */
//app.use('/rest/webhci/seguridad', authenticateJWT, webhciRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
