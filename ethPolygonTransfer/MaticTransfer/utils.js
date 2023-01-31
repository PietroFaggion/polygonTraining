const HDWalletProvider = require("@truffle/hdwallet-provider");
const maticClient = require('@maticnetwork/maticjs');

const rootTokenContract = "0x8751fc2eD6077AcBFC92B69bAD4a56814fC1a670";
const childTokenContract = "0x3401f5c5417DE0fc7B76ad440052327992f34267";

const from = "<your address here>";
const privateKey = "<your privateKey here>";

const parentProvider = new HDWalletProvider(privateKey, '<Goerli RPC URL>')
const maticProvider = new HDWalletProvider(privateKey, '<Mumbai RPC URL>')

function getMaticPOSClient() {
    return new maticClient.MaticPOSClient({
        network: "testnet",
        version: "mumbai",
        parentProvider: parentProvider,
        maticProvider: maticProvider
    });
}

module.exports = {
    getMaticPOSClient,
    childTokenContract,
    rootTokenContract,
    from
}