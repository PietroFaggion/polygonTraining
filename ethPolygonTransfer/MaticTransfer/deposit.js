const { getMaticPOSClient, from, rootTokenContract, childTokenContract } = require('./utils');

const amount = 10;

async function execute() {
    console.log("Starting deposit... ");
    const maticPOSClient = await getMaticPOSClient();

    let balanceOfToken = await maticPOSClient.balanceOfERC20(from, childTokenContract, {})

    console.log('balance before transfer', balanceOfToken);

    const tx = await maticPOSClient.depositERC20ForUser(rootTokenContract, from, amount, {
        from,
        gasPrice: "10000000000",
    });

    console.log("Amount deposited...")
    console.log(tx);

    balanceOfToken = await maticPOSClient.balanceOfERC20(from, childTokenContract, {})

    console.log('balance after transfer', balanceOfToken);
    
}

execute().then(res => {
    process.exit(0);
});