const BaseApi = require('../models/BaseApi');
const HttpService = require('./HttpService');

class ApiManager {
  constructor() {
    this.middleware = this.middleware.bind(this);
  }

  static create() {
    return new ApiManager();
  }

  static getUtils() {
    // @todo find a better way to provide utils
    return {
      http: HttpService
    };
  }

  attach(apiPath) {
    this.api = BaseApi.create();
    this.api.attach(apiPath);
  }

  middleware(...args) {
    return this.api.router(...args);
  }
}

module.exports = ApiManager;