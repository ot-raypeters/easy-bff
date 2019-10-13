class HttpService {
  static create() {
    return new HttpService();
  }

  async get(...args) {
    console.log('HttpService.get()', ...args);
  }

  async post(...args) {
    console.log('HttpService.post()', ...args);
  }

  async put(...args) {
    console.log('HttpService.put()', ...args);
  }

  async patch(...args) {
    console.log('HttpService.patch()', ...args);
  }

  async delete(...args) {
    console.log('HttpService.delete()', ...args);
  }
}

module.exports = HttpService;
