export const logger = (req, res, next) => {
    console.log("Request method: ", req.method);
    next();
};


