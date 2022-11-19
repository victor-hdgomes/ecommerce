const mongoose = require("../db/conn");
const { Schema } = mongoose;

const Product = mongoose.model(
    "Product",
    new Schema({
        title: { type: String, required: true, unique: true },
        description: { type: String, required: true },
        img: { type: String, required: true },
        categories: { type: Array },
        size: { type: String },
        color: { type: String },
        price: { type: Number, required: true },
    }, { timestamps: true })
)

module.exports = Product