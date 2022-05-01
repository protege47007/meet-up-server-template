const express = require("express")
const router = express.Router()
const speakersRoute = require("./speakers")
const feedbackRoute = require("./feedback")

module.exports = () => {
    
    router.use("/speaker", speakersRoute())

    router.use("/feedback", feedbackRoute())
    
    return router
}