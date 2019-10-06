const ApiManager = require('./services/ApiManager');
const NoCacheMiddleware = require('./middleware/NoCacheMiddleware');
const ObservabilityMiddleware = require('./middleware/ObservabilityMiddleware');

module.exports = (app) => {
  const api = ApiManager.create();

  api.attach('repositories/patient-zero-api/functions');

  app.use([
    NoCacheMiddleware.middleware,
    ObservabilityMiddleware.middleware,
    api.middleware
  ]);
};
