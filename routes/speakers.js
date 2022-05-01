const express = require("express")
const router = express.Router()

module.exports = () => {
    
    router.get("/", (req, res) => {
        res.json({message: "this is the speaker's index page"})
    })

    router.get("/:speaker", (req, res) => {
        res.json({message: `this page belongs to ${req.params.speaker}`})
    })

    
    return router
}