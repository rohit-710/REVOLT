require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
const fs = require("fs");
const privateKey = process.env.Private_Key;
const projectID = "41c09f593cdf478fa7208e63e018b2c5"


module.exports = {
  networks: {
    hardhat: {
      chainID: 1337
    },
    mumbai: {
      url: "https://polygon-mumbai.infura.io/v3/41c09f593cdf478fa7208e63e018b2c5",
      accounts: [privateKey]
    },
    mainet: {
      url: "https://polygon-mainnet.infura.io/v3/${projectID}",
      accounts: [privateKey]
    }
  },
  localhost: {
    url: "http://localhost:8545",
    chainId: 31337
  },
  solidity: "0.8.4",
};
