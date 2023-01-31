pragma solidity 0.6.6;

import "@chainlink/contracts/src/v0.6/VRFConsumerBase.sol";

import "@chainlink/contracts/src/v0.6/vendor/SafeMathChainlink.sol";

contract GenerateRandomnessPolygon is VRFConsumerBase {
    using SafeMathChainlink for uint;

    uint256 public diceResult;
    
    bytes32 internal keyHash;
    uint256 internal fee;
    
    /**
     * Constructor inherits VRFConsumerBase
     * 
     * Network: Mumbai
     * Chainlink VRF Coordinator address: 0x8C7382F9D8f56b33781fE506E897a4F1e2d17255
     * LINK token address:                0x326C977E6efc84E512bB9C30f76E30c160eD06FB
     * Key Hash: 0x6e75b569a01ef56d18cab6a8e71e6600d6ce853834d4a5748b720d06f878b3a4
     */
    constructor() 
        VRFConsumerBase(
            0x8C7382F9D8f56b33781fE506E897a4F1e2d17255, // VRF Coordinator
            0x326C977E6efc84E512bB9C30f76E30c160eD06FB  // LINK Token
        ) public
    {
        keyHash = 0x6e75b569a01ef56d18cab6a8e71e6600d6ce853834d4a5748b720d06f878b3a4;
        fee = 0.0001 * 10 ** 18; // 0.0001 LINK 
    }
    
    
    function rollDice() public returns (bytes32 requestId) {
        require(LINK.balanceOf(address(this)) > fee, "Not enough LINK - fill contract with faucet");
        bytes32 _requestId = requestRandomness(keyHash, fee);
        return _requestId;
    }
    
   
    function fulfillRandomness(bytes32 requestId, uint256 randomness) internal override  {
        diceResult = randomness.mod(20).add(1);
        
    }
    
    
    function latestRoll() public view returns (uint256 diceResult) {
        return diceResult;
    }
}