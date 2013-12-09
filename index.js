"use strict";
var Hapi = require("hapi");

// Create a server with a host and port
var server = Hapi.createServer("localhost", 3000);

// Add the route
server.route({
    method: "GET",
    path: "/hello",
    handler: function() {
      this.reply("hello world");
    }
  });

// Start the server
server.start();
