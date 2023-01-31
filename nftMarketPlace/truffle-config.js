/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * trufflesuite.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

const HDWalletProvider = require("@truffle/hdwallet-provider");
// create a file at the root of your project and name it .env -- there you can set process variables
// like the mnemomic and Infura project key below. Note: .env is ignored by git to keep your private information safe
require("dotenv").config();
const MNEMONIC_1 = process.env["MNEMONIC_1"];
const MNEMONIC_2 = process.env["MNEMONIC_2"];
const MNEMONIC_3 = process.env["MNEMONIC_3"];
const MNEMONIC_4 = process.env["MNEMONIC_4"];
const privateKeys = [MNEMONIC_1, MNEMONIC_2, MNEMONIC_3, MNEMONIC_4];
const infuraProjectId = process.env["INFURA_API_KEY"];

module.exports = {
    /**
     * contracts_build_directory tells Truffle where to store compiled contracts
     */
    contracts_build_directory: "./build/contracts",

    /**
     * contracts_directory tells Truffle where the contracts you want to compile are located
     */
    contracts_directory: "./contracts",

    networks: {
        ganache_cli_local: {
            host: "127.0.0.1", // Localhost (default: none)
            port: 8545, // Standard Ethereum port (default: none)
            network_id: "*", // Any network (default: none)
        },
        //polygon Infura mainnet
        polygon_infura_mainnet: {
            provider: new HDWalletProvider(
                privateKeys,
                `https://polygon-mainnet.infura.io/v3/${infuraProjectId}`,
                0,
                privateKeys.length
            ),
            network_id: 137,
            confirmations: 2,
            timeoutBlocks: 200,
            skipDryRun: true,
            chainId: 137,
        },
        //polygon Infura testnet
        polygon_infura_testnet: {
            provider: new HDWalletProvider(
                privateKeys,
                `https://polygon-mumbai.infura.io/v3/${infuraProjectId}`,
                0,
                privateKeys.length
            ),
            network_id: 80001,
            confirmations: 2,
            timeoutBlocks: 200,
            skipDryRun: true,
            chainId: 80001,
        },
    },

    // Set default mocha options here, use special reporters etc.
    mocha: {
        // timeout: 100000
    },

    // Configure your compilers
    compilers: {
        solc: {
            version: "^0.8.17",
        },
    },
    db: {
        enabled: true,
    },
};
