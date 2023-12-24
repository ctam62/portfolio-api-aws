const handleError = (res, message) => {
    return res.status(500).json({ error: message });
};

const handleNotFound = (res, message) => {
    return res.status(404).json({ message: message });
};

const handleBadRequest = (res, message) => {
    return res.status(400).json({ error: message });
};

module.exports = {
    handleError,
    handleNotFound,
    handleBadRequest
};