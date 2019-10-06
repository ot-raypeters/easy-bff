exports.handler = (event, context, callback) => {
  console.log('event', event);
  console.log('context', context);

    // your server-side functionality
  callback(null, {
    status: 200,
    body: 'B B B'
  });
};