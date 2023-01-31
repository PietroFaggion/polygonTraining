const { getMaticPOSClient, childTokenContract, from } = require('./utils');


const amount = 10;


async function execute() {
    console.log('Burning started');
    
    const maticPOSClient = await getMaticPOSClient();

    maticPOSClient.burnERC20(childTokenContract, amount, { from }).then(burnTx => {
        console.log("\n\n", burnTx);
        console.log('\nBurning completed...\n\n');
        console.log('Transaction hash is: ', burnTx.transactionHash);
    });

}


execute().then()