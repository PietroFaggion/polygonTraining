const { getMaticPOSClient, from, rootTokenContract } = require('./utils');

const amount = 1000;

async function execute() {
    console.log("started... ");
    const maticPOSClient = await getMaticPOSClient();
    const approval = await maticPOSClient.approveERC20ForDeposit(rootTokenContract, amount, { from });

    console.log("Approved...")
    console.log(approval);
}

execute().then(res => {
    process.exit(0);
});