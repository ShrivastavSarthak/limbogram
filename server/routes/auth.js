const express = require('express')
const router = express.Router()
const User = require("../models/User")
const { body, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const fetchuser = require('../middleware/fetchuser')
const JWT_SECRET = "iAmDon"





router.post('/signup', [
    body("username", "please enter a valid name").isLength({ min: 3,max:20 }),
    body('email', "please enter a valid email").isEmail(),
    body('password', "password length must be 8 character").isLength({ min: 8 })

], async (req, res) => {
    let success = false
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    try {

        let user = await User.findOne({ email: req.body.email })
        if (user) {
            res.status(400).json({ user: "User alreay exist" })
        } else {

            const salt = await bcrypt.genSalt(10);
            const secPassword = await bcrypt.hash(req.body.password, salt)

            user = await User.create({
                username: req.body.username,
                email: req.body.email,
                password: secPassword
            })

            const data = {
                user: {
                    id: user.id
                }
            }


            const authToken = jwt.sign(data, JWT_SECRET)

            success=true
            res.json({success, authToken })
        }
    } catch (error) {
        console.error(error.meassage);
        res.status(500).send("Something went wrong")

    }
    // .then(user => res.json(user)).catch(err => {
    //     console.log(err)
    //     res.json({ error: "email is already registered" })
    // })
})


router.post("/login", [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Enter a password").exists()
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email: email })
        if (!user) {
            return res.status(400).json({ error: "please enter a valid email" })
        }
        const passwordComp = await bcrypt.compare(password, user.password)
        if (!passwordComp) {
            return res.status(400).json({ error: "please enter a valid password" })
        }

        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET)
        success=true
        res.json({ success,authToken })
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Something went wrong")
    }
}
)

router.post('/getuser',fetchuser, async (req, res) => {

    try {
        userId = req.user.id
        const user = await User.findById(userId).select("-password")
        res.send(user)
    } catch (error) {
        console.error(error.meassage);
        res.status(500).send("Some error occurred: " + error.message)

    }
})

module.exports = router