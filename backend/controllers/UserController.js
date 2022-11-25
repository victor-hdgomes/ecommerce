const User = require('../models/User')
const bcrypt = require('bcrypt')

module.exports = class UserController {

    static async update(req, res) {
        if (req.body.password) {
            // Create a password
            const salt = await bcrypt.genSalt(12)
            const passwordHash = await bcrypt.hash(password, salt);
            req.body.password = passwordHash;
        }

        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, { new: true });
            res.status(200).json(updatedUser)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async delete(req, res) {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("User has been deleted!");
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async getUser(req, res) {
        try {
            const user = await User.findById(req.params.id);

            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async getAllUser(req, res) {
        const query = req.query.new
        try {
            const users = query ? await User.find().sort({ _id: -1 }).limit(5) : await User.find();

            res.status(200).json(users);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async getUserStats(req, res) {
        const date = new Date();
        const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

        try {
            const data = await User.aggregate([
                { $match: { createdAt: { $gte: lastYear } } },
                {
                    $project: {
                        month: { $month: "$createdAt" }
                    }
                },
                {
                    $group: {
                        _id: "$month",
                        total: { $sum: 1 }
                    }
                }
            ])
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json(error);
        }
    }

}