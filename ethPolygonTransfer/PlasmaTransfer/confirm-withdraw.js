const { getMaticPlasmaClient, from } = require('./utils')

const hash = "0xed49b551c27cee83bc9a230072cd8241f43468edbd51775f12c32d329e31fe3e"

async function execute() {
    const matic = await getMaticPlasmaClient()
    try {
        console.log('Started..');
        await  matic.withdraw(hash, { from, gas: "7000000" }).then(res => {
        	console.log("Withdraw process started: ", res);
        })

    } catch(err) {
        console.log(err);
    }
}

execute().then((_) => process.exit(0));