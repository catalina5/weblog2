const BlogModal = require("../models/blog");

const getBlogs = async (req, res, next) => {
  BlogModal.find({})
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => console.log(err));
};

const createBlog = async (req, res) => {
  const blog = req.body;
  console.log(req.userId);
  const newBlog = new BlogModal({
    ...blog,
    createdBy: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(404).json({ message: "Lỗi không tạo được" });
  }
};

const editBlog = function (req, res, next) {
  BlogModal.updateOne({ _id: req.params.id }, req.body)
    .then((item) => res.status(200).json(item))
    .catch(next);
};

const deleteBlog = async (req, res, next) => {
  const { id } = req.params.id;
  try {
    await BlogModal.deleteOne(id);
    res.json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: "Lỗi không xóa được!" });
  }
};

const getBlogByTag = function (req, res, next) {
  BlogModal.find({ tags: req.params.tag })
    .then((item) => res.status(200).json(item))
    .catch(next);
};

// const getBlogBySearch = async (req, res) => {
//   const { searchQuery } = req.query;
//   try {
//     const title = new RegExp(searchQuery, "i");
//     const blogs = await BlogModal.find({ title });
//     res.json(blogs);
//   } catch (error) {
//     res.status(404).json({ message: "Something went wrong" });
//   }
// };

const Search = async (req, res) => {
  const { searchQuery } = req.query;
  try {
    const title = new RegExp(searchQuery, "i");
    const blogs = await BlogModal.find({ title });
    res.json(blogs);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};
const getBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await BlogModal.findById(id);
    res.status(200).json(blog);
  } catch (error) {
    res.status(404).json({ message: "Lỗi không lấy được 1" });
  }
};

module.exports = {
  getBlogs,
  getBlog,
  createBlog,
  editBlog,
  deleteBlog,
  getBlogByTag,
  // getBlogBySearch,
  Search,
};
