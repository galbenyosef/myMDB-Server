var express = require('express');
var router = express.Router();
var axios = require("axios").default;

const API_URL = 'http://www.omdbapi.com/';
const API_KEY = '4536fdf9';


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const getMovies = async (req,res) => {

  const title = req.query.title || ''
  const page = req.query.page || 0

  const options = {
    url: `${API_URL}?s=${title}&apikey=${API_KEY}&page=${page}&type=movie`,
  };
  
  try{
    const response = await axios.request(options)
    return res.status(200).send(response.data)
  }
  catch(e){
    return
  }
  finally{
    return
  }
  
}

const getMovie = async (req,res) => {

  const imdbID = req.params.imdbID || 0
  
  console.log(imdbID)

  const options = {
    url: `${API_URL}?i=${imdbID}&apikey=${API_KEY}&type=movie`,
  };
  
  try{
    const response = await axios.request(options)
    return res.status(200).send(response.data)
  }
  catch(e){
    return
  }
  finally{
    return
  }
  
}

router.get('/movies/:imdbID',getMovie)
router.get('/movies',getMovies)

module.exports = router;
