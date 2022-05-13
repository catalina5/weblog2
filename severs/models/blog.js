const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);

const webblog = new Schema(
  {
    name: {
      type: String,
      maxlength: 255,
      required: true,
    },
    price: {
      type: Number,
      maxlength: 255,
      required: true,
    },
    quanlity: {
      type: Number,
      maxlength: 255,
      required: false,
    },
    img: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      required: false,
    },
    slug: { type: String, slug: "name", unique: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("WebBlog", webblog);
