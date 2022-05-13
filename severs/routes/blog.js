var express = require("express");
var router = express.Router();

const {
  getBlogs,
  postBlog,
  editBlog,
  deleteBlog,
  getBlogBySlug,
} = require("../controllers/blog.js");

router.get("/", getBlogs);
router.post("/post", postBlog);
router.put("/put/:id", editBlog);
router.delete("/detele/:id", deleteBlog);
router.get("/slug/:slug", getBlogBySlug);

module.exports = router;
