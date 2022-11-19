const mongoose = require("../db/conn");
const { Schema } = mongoose;

const Order = mongoose.model(
    "Order",
    new Schema({
        userId: { type: String, required: true },
        products: [
            {
                productId: { type: String },
                quantity: { type: Number, default: 1 }
            }
        ],
        amount: { type: Number, required: true },
        address: { type: Object, required: true },
        status: { type: String, default: "pending" }
    }, { timestamps: true })
)

module.exports = Order