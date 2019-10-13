# EasyBff

__Don't call us, we'll call you__

EasyBff is a silly framework for middleware as a service using node + express.

## Installation

```
// Use node 10 LTS
nvm use

// Install dependencies
npm install

// Start dev server
npm run dev
```

## Feature roadmap

### Now

- [x] should be able to create express router from repo
- [x] should automatically create logs and metrics for every request
- [x] should alias `index.js` to be an empty path
- [x] should be able to hot swap apis without restarting the server
- [ ] provide configurable http service to middleware

### Later

- [ ] canary release individual endpoints
- [ ] should check for new versions of the app periodically
- [ ] should be able to download repo with git and install dependencies with npm

## Testing

- [ ] should chaos test all functional apis to ensure graceful error handling

## Design principles

- Simplicity
- Reusability
- Standardization