/**
 * Dummy Middleware
 * This middleware function logs a message to the console for debugging purposes.
 * It should be used in the middleware stack to see if it gets executed.
 * 
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function in the stack.
 */
function dummy(req, res, next) {
    console.log('Dummy middleware');
    next(); // Pass control to the next middleware or route handler
}

module.exports = dummy;
