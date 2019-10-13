# EasyBff Example Api

The EasyBff framework parses the `./functions` folder, creates middleware for every file, and attaches every middleware to an endpoint relative to it's filepath. For example, middleware exported from `./functions/example.js` responds to requests for the `{host}/example` endpoint.

Additionally, folder names can be prefixed with `:` to accept request params. Middleware in `./functions/:patientId/test.js` responds to `{host}/:patientId/test` and will have `req.params.patientId` available.

## Notes

Currently, middleware is attached to express using [app.all](https://expressjs.com/en/4x/api.html#app.all), such that middleware must handle different http methods manually.

In example, this middleware can support different responses for `GET` and `POST` requests:

```
module.exports = (req, res) => {
  if (req.method === 'GET') {
    // return get response;
  }

  if (req.method === 'POST') {
    // return post response;
  }

  // method not allowed
  res.sendStatus(405);
}
```
