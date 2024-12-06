const handleError = (err, req, res, next) => {
    res.statusCode = 500
    res.json({
        error: true,
        message: "error interno al server"
    })
}

module.exports = handleError;