const { getMaticPlasmaClient, from, childToken, rootToken } = require('./utils')

const amount = "1000000000000000000";

async function execute() {
  const matic = await getMaticPlasmaClient()
  
  try {
  	let balance = await matic.balanceOfERC20(from, childToken, {})
    console.log("Balance before transaction: ", balance);
    
    const tx = await matic.approveERC20TokensForDeposit(rootToken, amount, { from })
    console.log("Deposit Approved");
    console.log(tx);

    const depTx = await matic.depositERC20ForUser(rootToken, from, amount, { from, gasPrice: '10000000000' })
    console.log("Amount Deposited")
    console.log("Deposit script is: ", depTx);

    balance = await matic.balanceOfERC20(from, childToken, {})
    console.log("Balance after transaction: ", balance);
    
    

   } catch(err) {
    console.log(err);
  }
  
}

execute().then(_ => {
  process.exit(0)
});