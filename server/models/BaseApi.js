const path = require('path');
const express = require('express');
const recursive = require('recursive-readdir');

class BaseApi {
  constructor() {
    this.router = express();
  }

  static create() {
    return new BaseApi();
  }

  static getEndpoints(basePath) {
    return new Promise((resolve, reject) =>
      recursive(basePath, (err, paths) => {
        if (err) return reject(err);
        const files = paths.map(r => r.replace('.js', ''));
        return resolve(files);
      }));
  }

  attachEndpoints(api, endpoints) {
    this.basePath = api;

    endpoints.forEach((filePath) => {
      const endpoint = filePath
        .replace('/index', '')
        .replace(api, '');

      const apiPath = path.resolve(__dirname, '../..', filePath);
      const apiMiddleware = require(apiPath);

      this.attachEndpoint(endpoint, apiMiddleware);
    });
  }

  attachEndpoint(endpoint, apiMiddleware) {
    console.info('Registering:', endpoint);
    this.router.all(endpoint, apiMiddleware);
  }

  attach(api) {
    return BaseApi.getEndpoints(api)
      .then(this.attachEndpoints.bind(this, api))
      .catch(err => console.error('BaseApi error', err));
  }
}

module.exports = BaseApi;
