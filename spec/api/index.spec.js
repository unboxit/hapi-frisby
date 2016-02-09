"use strict";

var frisby = require("frisby");

frisby.create("hello world")
  .get("http://localhost:3000/hello")
  .expectStatus(200)
  // .expectHeaderContains("content-type", "application/json")
  .expectBodyContains("hello world")
.toss();
