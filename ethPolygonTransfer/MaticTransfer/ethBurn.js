const { getMaticPOSClient, from } = require('./utils');

const amount = 5000000000000;
const childTokenContract = '0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa';

async function execute() {
    console.log('Burning started');

    try {

    	const maticPOSClient = await getMaticPOSClient();

        const tx = await maticPOSClient.burnERC20(childTokenContract, amount, { from });

        console.log("\n\n", tx);
        console.log('\nBurning completed...\n\n');
        console.log('Transaction hash is: ', tx.transactionHash);
    }
    catch(err) {
        console.log(err);        
    }
    
   

}


execute().then(res => {
    process.exit(0);
});