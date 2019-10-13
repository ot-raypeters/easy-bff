class LoggingMiddleware {
  static middleware(req, res, next) {
    const start = Date.now();

    res.on('finish', () => {
      const duration = Date.now() - start;
      const log = `${req.method} ${req.url} (${res.statusCode}) - ${duration}ms`;
      LoggingMiddleware.log(log);
    });

    next();
  }

  static log(...args) {
    console.log(...args);
  }
}

module.exports = LoggingMiddleware;
