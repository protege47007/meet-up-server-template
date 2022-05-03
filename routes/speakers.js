const express = require("express")
const router = express.Router()

module.exports = ({speakerService}) => {
    
    router.get("/", async (req, res, next) => {
        try {
            const speakers = await speakerService.getList()
            res.json({message: "this is the speaker's index page", speakers})
        } catch (error) {
            return next(error)
        }
    })

    router.get("/:speaker", (req, res) => {
        res.json({message: `this page belongs to ${req.params.speaker}`})
    })

    
    return router
}