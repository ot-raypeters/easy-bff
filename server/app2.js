const NoCacheMiddleware = require('./middleware/NoCacheMiddleware');
const LoggingMiddleware = require('./middleware/LoggingMiddleware');
const ApiManager = require('./services/ApiManager');

// @note fancy hot-swapping api usage
module.exports = (app) => {
  const api = ApiManager.create();

  let counter = 0;
  const apis = [
    'repositories/patient-zero-api/functions',
    'repositories/other-api/functions'
  ];

  const swapApis = () => {
    const nextApi = apis[counter % apis.length];
    counter += 1;

    LoggingMiddleware.log(`Attaching "${nextApi}" api`);
    api.attach(nextApi);
  };

  swapApis();

  app.use([
    NoCacheMiddleware.middleware,
    LoggingMiddleware.middleware,
    (req, res, next) => {
      res.on('finish', swapApis);
      next();
    },
    api.middleware
  ]);
};
