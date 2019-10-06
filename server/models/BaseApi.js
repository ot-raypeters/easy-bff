const path = require('path');
const express = require('express');
const recursive = require('recursive-readdir');

class BaseApi {
  static getEndpoints(filePath) {
    return new Promise((resolve, reject) =>
      recursive(filePath, (err, paths) => {
        if (err) return reject(err);

        const files = paths.map(r => r.replace('.js', ''));
        return resolve(files);
      }));
  }

  static createRouter(filePath, files) {
    return files.reduce((router, file) => {
      const endpoint = file.replace(`${filePath}/functions`, '');
      const middleware = require(path.resolve(__dirname, '../..', file));

      console.info('Configuring', endpoint);
      router.all(endpoint, middleware);
      return router;
    }, express());
  }

  static create({ repo }) {
    return BaseApi.getEndpoints(repo)
      .then(BaseApi.createRouter.bind(null, repo))
      .catch(err => console.error('BaseApi error', err));
  }
}

module.exports = BaseApi;
