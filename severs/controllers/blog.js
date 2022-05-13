const Items = require("../models/blog");

const getBlogs = function (req, res, next) {
  Items.find({})
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => console.log(err));
};

const postBlog = function (req, res, next) {
  const course = new Items(req.body);
  course
    .save()
    .then((item) => res.status(200).json(item))
    .catch((err) => {
      console.log(err);
    });
};

const editBlog = function (req, res, next) {
  Items.updateOne({ _id: req.params.id }, req.body)
    .then((item) => res.status(200).json(item))
    .catch(next);
};

const deleteBlog = function (req, res, next) {
  Items.deleteOne({ _id: req.params.id })
    .then(() => res.redirect("back"))
    .catch(next);
};

const getBlogBySlug = function (req, res, next) {
  Items.findOne({ slug: req.params.slug })
    .then((item) => res.status(200).json(item))
    .catch(next);
};

module.exports = { getBlogs, postBlog, editBlog, deleteBlog, getBlogBySlug };
