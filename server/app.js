const NoCacheMiddleware = require('./middleware/NoCacheMiddleware');
const LoggingMiddleware = require('./middleware/LoggingMiddleware');
const ApiManager = require('./services/ApiManager');

module.exports = (app) => {
  const api = ApiManager.create();
  api.attach('repositories/patient-zero-api/functions');

  app.use([
    NoCacheMiddleware.middleware,
    LoggingMiddleware.middleware,
    api.middleware
  ]);
};
