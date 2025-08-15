// eslint-disable-next-line no-unused-vars
export const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode < 400 ? 500 : res.statusCode;

    res.status(statusCode).json({
        message: err.message,
// eslint-disable-next-line no-undef
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
}