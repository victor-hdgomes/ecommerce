const Cart = require('../models/Cart')

module.exports = class CartController {

    static async create(req, res) {
        const newCart = new Cart(req.body);

        try {
            const savedCart = await newCart.save();
            res.status(200).json(savedCart);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async update(req, res) {
        try {
            const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, { new: true });
            res.status(200).json(updatedCart)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async delete(req, res) {
        try {
            await Cart.findByIdAndDelete(req.params.id);
            res.status(200).json("Cart has been deleted!");
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async getCart(req, res) {
        try {
            const cart = await Cart.findOne({userId: req.params.userId});

            res.status(200).json(cart);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async getAll(req, res) {
        try {
           const carts = await Cart.find()
           res.status(200).json(carts) 
        } catch (error) {
            res.status(500).json(error);
        }
    }

}