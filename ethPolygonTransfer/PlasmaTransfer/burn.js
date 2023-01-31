const { getMaticPlasmaClient, from, childToken } = require('./utils')

const amount = "100000000000000";

async function execute() {
    const matic = await getMaticPlasmaClient()
    try {
        console.log('Burning Started..');
        const burnTx = await matic.startWithdraw(childToken, amount, { from });
        console.log("Burn Transation: ", burnTx);

    } catch(err) {
        console.log(err);
    }
}

execute().then((_) => process.exit(0));