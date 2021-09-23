require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture globe food ski stove cruise payment coin inside light army genius'; 
let testAccounts = [
"0x12cd27fd33fd4a065d7392bd4b0c612b9090fffe9233618e3ec76b18a944d184",
"0x62b510df0a496a47ac85003972f2bff37e21c77d29cefabe55c06ecb4b60897c",
"0x5e0fc64a28badf7861099159565fef80e0f96ae3dda0bc8a57d67bc684fd869d",
"0xa24b143212c06cc257289e5adff3e93fa55af4f46039aea34fa09b1580e8c970",
"0x7895f67f6ee864af931eeb167a5f4b4cb0a6bc274b7272f606b3d5f9368288fb",
"0xf82fa7c9271d59925b6260054159e290d38ce0a3190396767fb8aa6a0ce45f55",
"0x2edce8bce1c43526e2aebc9bd3edd9182c9234e167391b7fce28d8531c52c788",
"0xb9268b4e61c1e8505927412d715523c18e5bfbd6cbd57896752b6feb7d2bf1d4",
"0xa348cd2130d2f794806d75c2d0ab1a3465cf01954c264db8e0a9da0394663102",
"0x53e19069509f903d630e14e79a0076f376adfe0718d67f378121152e1f5caa74"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

