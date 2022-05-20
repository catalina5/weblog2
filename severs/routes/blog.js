var express = require("express");
var router = express.Router();
const auth = require("../middleware/auth.js");

const {
  getBlogs,
  getBlog,
  createBlog,
  editBlog,
  deleteBlog,
  getBlogByTag,
} = require("../controllers/blog.js");

router.post("/post", createBlog);
router.get("/", getBlogs);
router.put("/put/:id", editBlog);
router.delete("/delete/:id", deleteBlog);
router.get("/tag/:tag", getBlogByTag);
router.get("/:id", getBlog);

module.exports = router;
