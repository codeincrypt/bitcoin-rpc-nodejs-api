const express = require("express");
const request = require("request");

const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env") });

const USER = process.env.RPC_USER;
const PASS = process.env.RPC_PASSWORD;

const ENDPOINT = '127.0.0.1:8332'
const ENDPOINTURL = `http://${USER}:${PASS}@${ENDPOINT}`

const headers = {
  "content-type": "text/plain;"
};

const router = express.Router();

router.get("/", (req, res) => res.json({ error: "nothing will be found..." }));

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
      return res.json({statuscode:0, data:null, error:error, statusCode:response.statusCode});
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
      return res.json({statuscode:0, data:null, error:error, statusCode:response.statusCode});
    }
  };
  request(options, callback);
});

module.exports = router;