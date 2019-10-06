const BaseApi = require('../models/BaseApi');

class ApiManager {
  constructor() {
    this.api = BaseApi.create();
    this.middleware = this.middleware.bind(this);
  }

  static create() {
    return new ApiManager();
  }

  attach(...args) {
    return this.api.attach(...args);
  }

  middleware(...args) {
    return this.api.router(...args);
  }
}

module.exports = ApiManager;