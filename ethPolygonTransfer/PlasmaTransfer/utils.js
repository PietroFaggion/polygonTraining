const HDWalletProvider = require("@truffle/hdwallet-provider");
const Matic = require('@maticnetwork/maticjs').default

const privateKey = "<your privatekey>"
const from = "<your address>"

const childToken = "0x2d7882beDcbfDDce29Ba99965dd3cdF7fcB10A1e"
const rootToken = "0x3f152B63Ec5CA5831061B2DccFb29a874C317502"

const parentProvider = new HDWalletProvider(privateKey, '<Goerli RPC URL>')
const maticProvider = new HDWalletProvider(privateKey, '<Mumbai RPC URL>')

async function getMaticPlasmaClient() {
    const matic = new Matic({
        network: "testnet",
        version: "mumbai",
        parentProvider: parentProvider,
        maticProvider: maticProvider,
        parentDefaultOptions: {from: from},
        maticDefaultOptions: {from: from}
    });
    await matic.initialize();
    return matic;
}

module.exports = {
  getMaticPlasmaClient,
    childToken,
    rootToken,
    from
}