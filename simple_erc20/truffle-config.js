var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "<your account twelve words(seed phrases) ...>";
var infura_url = "<Infura Rinkeby Endpoint-API>";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(mnemonic, infura_url)
      },
      network_id: "*"
    }
  }
};