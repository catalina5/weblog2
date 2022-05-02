var express = require('express');
const Items = require("../model/clock.model");
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  Items.find({})
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => console.log(err))
});

//post home page
router.post('/post', function (req, res, next) {
  const course = new Items(req.body);
  course
    .save()
    .then((item) => res.status(200).json(item))
    .catch((err) => { console.log(err) });
})

// edit item home page
router.put('/put/:id', function (req, res, next) {
  Items.updateOne({ _id: req.params.id }, req.body)
    .then((item) =>
      res.status(200).json(item),
    )
    .catch(next);
})

  // detele item home page
router.delete('/detele/:id', function (req, res, next) {
    Items.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
})

router.get('/slug/:slug', function (req, res, next) {
  Items.findOne({ slug: req.params.slug })
    .then((item) => res.status(200).json(item))
    .catch(next);
})



module.exports = router;
