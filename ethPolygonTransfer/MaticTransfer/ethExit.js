const { getMaticPOSClient, from } = require('./utils');

const hash = '0x6d34141b30df6cabef0b354e20f8095cac5d91fcd5397180fb4b85afb1070e77'

async function execute() {
    console.log('Exit started');

    try {

    	const maticPOSClient = await getMaticPOSClient();

        const tx = await maticPOSClient.exitERC20(hash, { from });

        console.log("\n\n", tx);
        console.log('\nExit process completed...\n\n');
        console.log('Transaction hash is: ', tx.transactionHash);
    }
    catch(err) {
        console.log(err);        
    }
    
   

}


execute().then(res => {
    process.exit(0);
});