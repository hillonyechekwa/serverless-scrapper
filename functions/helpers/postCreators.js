const fR = require('./formattedReturn')
const { table } = require('./airtable')
const scrappers = require('./scrappers')
module.exports = async (event, context) => {
    try {
        const url = JSON.parse(event.body)
        console.log(url)
        const scrapper = await scrappers.scrapeChannel(url)
        
        return await fR(200, scrapper)
    } catch (err) {
        console.error(err)
        return fR(500, {msg: "something went wrong, check your post method code"})
    }
}