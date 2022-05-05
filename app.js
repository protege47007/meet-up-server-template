const express = require("express")
const path = require("path")
const createError = require("http-errors")

const FeedbackService = require("./services/feedbackService")
const SpeakerService = require("./services/speakerService")

// initialising the data services
const feedbackService = new FeedbackService("./data/feedback.json")
const speakerService = new SpeakerService("./data/speakers.json")

const routes = require("./routes")

const app = express()
const port = 3000

app.set("view engine", "ejs")
app.set("views", "public")

app.locals.siteName = "Art Meetups" // Global variable that is available throughout the app 

app.use(async (req, res, next) => {
    try {
        const names = await speakerService.getNames()
        // this is also a global variable but it attached to every response object
        // unlike app.locals vars, this refetches its data. useful to keep track of 
        // changes in our database to our global variables
        res.locals.speakerNames = names
        return next()
    } catch (error) {
        return next(error)
    }
})
app.use("/", routes({feedbackService, speakerService, }))

app.use( (req, res, next) => {
    return next(createError(404, "File Not Found"))
})

app.use( (err, req, res, next) => {
    res.locals.message = err.message // global error message
    const status = err.status || 500
    res.locals.status = status // global error status
    res.status(status)
    res.send("error") // error page
})

app.listen(port, () => {
    console.log("server is running");
})