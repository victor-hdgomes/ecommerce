const User = require('../models/User')
const bcrypt = require('bcrypt')

module.exports = class UserController {

    static async register(req, res) {
        const { username, email, password, confirmpassword } = req.body

        // Validations
        if (!username) {
            res.status(422).json({ message: 'The username is mandatory!' })
            return
        }
        if (!email) {
            res.status(422).json({ message: 'The email is mandatory!' })
            return
        }
        const validateEmail = (email) => {
            return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        };
        if (!validateEmail(email)) {
            res.status(422).json({ message: 'Please enter a valid email!' })
            return
        }
        if (!password) {
            res.status(422).json({ message: 'The password is mandatory!' })
            return
        }
        if (!confirmpassword) {
            res.status(422).json({ message: 'The confirm password is mandatory!' })
            return
        }
        if (password !== confirmpassword) {
            res.status(422).json({ message: 'Password and confirm password must be the same!' })
            return
        }

        // Check if user exists
        const userExists = await User.findOne({ email: email })
        if (userExists) {
            res.status(422).json({ message: 'Email is already used!' })
            return
        }

        // Check if username already exists
        const usenameExists = await User.findOne({ username: username })
        if (usenameExists) {
            res.status(422).json({ message: 'Username is already used!' })
            return
        }

        // Create a password
        const salt = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(password, salt)

        // Create user
        const user = new User({
            username,
            email,
            password: passwordHash
        })

        try {
            const newUser = await user.save()
            res.status(201).json(newUser)
        } catch (error) {
            res.status(500).json({ message: error })
        }
    }

    static async login(req, res) {
        const { email, password } = req.body

        // Validations
        if (!email) {
            res.status(422).json({ message: 'The email is mandatory!' })
            return
        }
        const validateEmail = (email) => {
            return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        };
        if (!validateEmail(email)) {
            res.status(422).json({ message: 'Please enter a valid email!' })
            return
        }
        if (!password) {
            res.status(422).json({ message: 'The password is mandatory!' })
            return
        }

        // Check if user exists
        const user = await User.findOne({ email: email })
        if (!user) {
            res.status(422).json({ message: 'There is no user with this email!' })
            return
        }

        // Check if password match with db password
        const checkPassword = await bcrypt.compare(password, user.password)

        if (!checkPassword) {
            res.status(422).json({ message: 'Invalid password!' })
            return
        }

        // Login
        res.status(200).json(user)
    }

}