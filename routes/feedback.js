const express = require("express")
const router = express.Router()

module.exports = ({feedbackService}) => {
    
    router.get("/", async (req, res, next) => {
        try {
            const feedbacks = await feedbackService.getList()
            res.json({message: "this is the feedback 's index page", feedbacks})
        } catch (error) {
            return next(error)
        }
    })

    router.post("/", (req, res) => {
        res.json({message: "message received!"})
    })

    
    return router
}