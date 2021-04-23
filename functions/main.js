const fR = require('./helpers/formattedReturn')
const getCreators = require('./helpers/getCreators')
const postCreators = require('./helpers/postCreators')
exports.handler = async (event, context) => {
    if (event.httpMethod === 'GET') {
        return await getCreators(event)
    } else if (event.httpMethod === 'POST') {
        return await postCreators(event)
    } else {
        return fR(405, {})
    }
}