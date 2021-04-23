const fR = require('./formattedReturn')
const { table } = require('./airtable')
// const {scrappers} = require('./scrappers')
module.exports = async (event) => {

    try {
        
        const creators = [
             {name:"Unbox Therapy", img: "https://"},
             {name:"Dave Lee", img: "https://"},
             {name:"MKBHD", img: "https://"}
        ]
        
    
        return fR(200, creators)
    } catch (err) {
        console.error(err)
        return fR(500, {msg: "something went wrong, couldn't get data"})
    }
}
