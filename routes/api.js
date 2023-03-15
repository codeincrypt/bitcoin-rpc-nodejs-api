const express = require("express");
const request = require("request");

const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env") });

const USER = process.env.RPC_USER;
const PASS = process.env.RPC_PASSWORD;

const BTCRPC = '127.0.0.1:8332'
const ENDPOINTURL = `http://${USER}:${PASS}@${BTCRPC}`

const headers = {
  "content-type": "text/plain;"
};

const router = express.Router();

router.get("/", (req, res) => res.json({ message: "Invalid URL" }));

router.get("/getblockhash/:index", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"paybito","method":"getblockhash","params":[${req.params.index}]}`;

  var options = {
    url: ENDPOINTURL,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.json({statuscode:1, data:data, error:null});
    } else {
      console.log('error', error)
      return res.json({statuscode:0, data:null, error:error});
    }
  };
  request(options, callback);
});


router.get("/getbalance", (req, res) => {
  var dataString = `{"jsonrpc": "1.0", "id": "paybito", "method": "getbalance", "params": ["*", 6]}`;
  var options = {
    url: ENDPOINTURL,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.json({statuscode:1, data:data, error:null});
    } else {
      console.log('error', error)
      return res.json({statuscode:0, data:null, error:error});
    }
  };
  request(options, callback);
});


router.get("/gettransaction/:hash", (req, res) => {
  var dataString = `{"jsonrpc": "1.0", "id": "paybito", "method": "gettransaction", "params": ["${req.params.hash}"]}`;
  var options = {
    url: ENDPOINTURL,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.json({statuscode:1, data:data, error:null});
    } else {
      console.log('error', response.statusCode, error)
      return res.json({statuscode:0, data:null, error:error});
    }
  };
  request(options, callback);
});


router.get("/getaddressinfo/:address", (req, res) => {
  var dataString = `{"jsonrpc": "1.0", "id": "paybito", "method": "getaddressinfo", "params": ["${req.params.address}"]}`;
  var options = {
    url: ENDPOINTURL,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.json({statuscode:1, data:data, error:null});
    } else {
      console.log('error', error)
      return res.json({statuscode:0, data:null, error:error});
    }
  };
  request(options, callback);
});


router.get("/getnewaddress", (req, res) => {
  var dataString = `{"jsonrpc": "1.0", "id": "paybito", "method": "getnewaddress", "params": []}`;
  var options = {
    url: ENDPOINTURL,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.json({statuscode:1, data:data, error:null});
    } else {
      console.log('error', error)
      return res.json({statuscode:0, data:null, error:error});
    }
  };
  request(options, callback);
});

module.exports = router;