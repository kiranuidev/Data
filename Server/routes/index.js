var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get("/countries", function (req, res) {
  res.json([{ name: "India", code: "IN" },
  { name: "United States", code: "USA" }]);
})

module.exports = router;
