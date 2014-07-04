# API

[![Codeship Status for unboxit/hapi-frisby](https://codeship.io/projects/3c1add60-e53e-0131-150f-6240fcc21f63/status?branch=master)](https://codeship.io/projects/25726)

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
