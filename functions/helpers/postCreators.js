const fR = require('./formattedReturn')
const { table } = require('./airtable')
const scrappers = require('./scrappers')
module.exports = async (event, context) => {
    try {
        console.log(event.body)
        const res = JSON.parse(event.body)
        const scrape = await scrappers.scrapeChannel(res.channelUrl)
        console.log(scrape)
        return fR(200, scrape)
    } catch (err) {
        console.error(err)
        return fR(500, {msg: "something went wrong, check your post method code"})
    }
}