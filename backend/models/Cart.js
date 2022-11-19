const mongoose = require("../db/conn");
const { Schema } = mongoose;

const Cart = mongoose.model(
    "Cart",
    new Schema({
        userId: { type: String, required: true },
        products: [
            {
                productId: { type: String },
                quantity: { type: Number, default: 1 }
            }
        ],
    }, { timestamps: true })
)

module.exports = Cart