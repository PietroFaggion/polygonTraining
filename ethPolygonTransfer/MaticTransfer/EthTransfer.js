const { getMaticPOSClient, from} = require('./utils');
const maticPOSClient = getMaticPOSClient();

const amount = 5000000000000;

async function execute() {
    console.log("Starting deposit... ");
    try {
        const tx = await maticPOSClient.depositEtherForUser(from, amount, {
            from,
            gasPrice: "10000000000",
        });

        console.log("Amount deposited...")
        console.log(tx);
    }
    catch(err) {
        console.log(err);        
    }
}

execute().then(res => {
    process.exit(0);
});
