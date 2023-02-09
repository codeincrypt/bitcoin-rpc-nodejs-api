
# Configuring Login Information

In order to use the Bitcoin RPC API, a username and password are required in the Bitcoin Core configuration file. This will allow us to connect with the node remotely using HTTP. You can add these values to the bitcoin.conf file by selecting

inside of Bitcoin Core, which will open a text file. Add the following lines to this file:

```bash
  rpcuser=bitcoinuser
  rpcpassword=bitcoinpassword
```

## Using packages 

Next we can install the additional javascript packages we’ll be using. Packages (or dependencies) are 3rd party javascript code we will utilize in our application. Install the needed dependencies with the following two commands

### Dependencies:

```bash
npm install dotenv express request
```

- dotenv - reads our bitcoin login info from the .env file
- express - our routing framework, lets us specify method endpoints
- request - allows us to send HTTP requests to the bitcoin client


# Project Setup

Once you have bitcoin installed and synced, create a folder for your application and navigate to it


```bash
  git clone https://github.com/codeincrypt/bitcoin-rpc-nodejs-api
  cd bitcoin-rpc-nodejs-api
```

Start the application by entering the command:

```bash
npm run server
```

If the server has started correctly, in your console you should see
```bash
Server running on port 8000
```

Now open your browser and navigate to:
```bash
http://localhost:8000/api/getbalance
```
