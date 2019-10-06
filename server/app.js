const BaseApi = require('./models/BaseApi');

module.exports = (app) => {
  let router;

  const refresh = () =>
    BaseApi.create({
      repo: 'repositories/patient-zero-api',
      namespace: 'team a'
    })
    .then((api) => {
      router = api;
      console.log('Enabling new api');
    })
    .catch((err) => {
      console.error('App could not create api', err);
    });

  refresh();

  app.use((...args) => router(...args));
};
