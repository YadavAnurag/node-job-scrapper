var express = require('express');
var axios = require('axios');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Job Scrapper' });
});

router.post('/jobs',function(req, res, next){
  queries = req.body;
  let url = `https://indreed.herokuapp.com/api/jobs?country=IN&q=${req.body.q}&l=${req.body.l}`;
  if(queries){
    axios.get(url,{
      params: queries
    })
    .then(function(response){
      let jobs = response.data;
      if(jobs.length>=1){
        res.render('jobs', {title: 'Jobs', jobs: jobs});
      }
      else{
        res.render('jobs', {title: 'Jobs', message: 'Sorry No Jobs match found'});
      }
    })
    .catch(function(err){
      if(err){
        console.log(err);
        res.render('jobs', {title: 'Jobs', sorry: 'Sorry for inconvenience try again later'});
      }
    });
  }
});

module.exports = router;
// https//www.simplyhired.com/job/eUYMq-aAGoz2jCQfA3z0ADV7V7xq0aTZERXTW0SKgyWzt0oAQKtbqw
// https://www.simplyhired.com/job/eUYMq-aAGoz2jCQfA3z0ADV7V7xq0aTZERXTW0SKgyWzt0oAQKtbqw
