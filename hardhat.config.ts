import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv"
dotenv.config()

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY}`, // Replace with your Alchemy or Infura URL
      accounts: [`${process.env.MY_PRIVATE_KEY}`], // Replace with your private key (use dotenv for security)
    },
  },
  etherscan: {
    apiKey: `${process.env.MY_ETHERSCAN_API_KEY}`, // Replace with your Etherscan API key
  },
  sourcify:{
    enabled:false
  }
};

export default config;
