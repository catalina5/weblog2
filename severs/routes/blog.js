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
  // getBlogBySearch,
  Search,
} = require("../controllers/blog.js");

router.post("/post", createBlog);
router.get("/", getBlogs);
router.put("/put/:id", editBlog);
router.get("/tag/:tag", getBlogByTag);
router.delete("/delete/:id", deleteBlog);
router.get("/search", Search);
router.get("/:id", getBlog);

module.exports = router;
