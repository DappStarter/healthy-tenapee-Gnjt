require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half climb force trip maple note spice punch gesture lobster flock gate'; 
let testAccounts = [
"0xae58b9cb3055164f87e41cd005081052e7b7fa6905735cc29aded8a9a5bbb320",
"0xd7d8d0142952d903eb8226bffe92c8c509fd41a595a4a385de1c0dc2604ce041",
"0x88dfe7c3d330ed15ea30955cf79e1410f379fdeef8cac40510599a262f0bc74a",
"0x49c7d9ebbf57e87a9aa5182467bb48def64bf8359b271a74a31eae7bae1e6b78",
"0xc0e770bed1201dec737125dfd655d21e8326eb156f0e3d4fc189da94ec114212",
"0xa9841f6b640bd1951270a01c81e10f8cf1a1a43a3237c77368565c94f47581be",
"0xc118baccd393f1b2642e832803469db4c8d671ad2cb84a9f409d5ff6289e5a6c",
"0xbd0bf157c2a8569cf94e6418a45a89eb3fe04f7bcc3cd069add7ea2aede0148b",
"0x14207fa251184e6662e4153e3f4f3d8bcf3629866402363304a03a039b4eabc2",
"0x17459698c75071cdd3439bfa773c74eaadc44b4a2b0386e018684fb47efdeb68"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


