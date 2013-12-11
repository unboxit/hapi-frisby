# API

[![Codeship Status](https://www.codeship.io/projects/bf0e04e0-44a8-0131-d9d9-0e882a2b5818/status?branch=master)]

### Prerequisites

- install prerequisites
```bash
$ npm install -g frisby jasmine-node nodemon dredd
```

- install dependencies
```bash
$ npm install
```

### Development and testing

- run server for Development
```bash
$ nodemon index.js
```

- run test for Development
```bash
$ jasmine-node spec/api/ --watch --autotest
```

- run test for CI server
```bash
$ npm test
```
or

```bash
$ jasmine-node spec/api/ --junitreport
```


### Credits
- [Hapi](http://hapijs.com) - A rich framework for building web applications and services.
- [Frisby](http://frisbyjs.com/) - Frisby is a REST API testing framework built on node.js and Jasmine.
- [dredd](https://github.com/apiaryio/dredd) - API Blueprint testing tool
