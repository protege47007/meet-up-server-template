const fs =require("fs")
const { get } = require("http")
const util = require("util")

// to use async/await with fs.readFile, util.promisify gives us that
const readFile = util.promisify(fs.readFile)
// const writeFile = util.promisify(fs.writeFile)

class Speaker{
    constructor(dataFile){
        this.dataFile = dataFile
    }

    async getNames(){
        const data = await this.getData()

        // we are using the map function to transform the data arrray into another array
        return data.map(speaker => ({name: speaker.name, shortName: speaker.shortName}))
    }

    async getArtworks(){
        const data = await this.getData()


    }

    async getData(){
        const data = await readFile(this.dataFile, "utf8")
        if(!data) return []
        return JSON.parse(data)
    }
}