module.exports = function (statusCode, body) {
    return {
        statusCode,
        body: JSON.stringify(body)
    }
}