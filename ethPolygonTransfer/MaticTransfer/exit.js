const { getMaticPOSClient, from } = require('./utils');

const burnTxHash = '0x3f70771e553d2278d5f96f0ae3fb730174ca36ca606f4ab6b157c1e9ff29fcb9'

const execute = async () => {
  try {

  	const maticPOSClient = await getMaticPOSClient();

    const tx = await maticPOSClient.exitERC20(burnTxHash, { from })
    
    console.log(tx.transactionHash)
  
  } catch (e) {
    console.error(e)
  }
}

execute().then(() => process.exit(0))