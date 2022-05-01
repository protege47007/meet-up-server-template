const express = require("express")
const router = express.Router()

module.exports = () => {
    
    router.get("/", (req, res) => {
        res.json({message: "this is the feedback 's index page"})
    })

    router.post("/", (req, res) => {
        res.json({message: "message received!"})
    })

    
    return router
}