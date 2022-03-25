
  
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/l2HAe0H40rzmeOLCOITcAFgOkXydw4nW',
      accounts: ['5ec12fda8109ce1b59a7f72fac00ad55ccab37357e258cd39495c4bf36c78c54'],
    },
  },
};
