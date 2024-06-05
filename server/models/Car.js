const { Schema, model } = require("mongoose");

const carschema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: [2, "car name must be at least 2 characters"],
  },
  category: {
    type: String,
    required: [true, "car category is required"],
  },
  date: {
    type: String,
    required: [true, "Release date is required"],
  },
  imageUrl: {
    type: String,
    required: true,
    match: [/^https?:\/\//, "Image must be a valid URL"],
  },

  mode: {
    type: String,
    required: [true, "Mode is required"],
  },
  description: {
    type: String,
    required: true,
    minLength: [10, "car description must be at least 10 characters"],
  },
  likes: {
    type: Number,
    default: 0,
  },
  likedBy: [{ type: Schema.Types.ObjectId, ref: "User", default: [] }],
  owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

const carModel = model("car", carschema);
module.exports = {
  carModel,
};
