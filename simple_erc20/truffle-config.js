var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "subway autumn time soft odor gravity hard capable garlic mixed nephew satisfy";
var infura_url = "https://rinkeby.infura.io/v3/645cd82a65a04f22832743c46ec31aae";

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