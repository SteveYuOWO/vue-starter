import { defineStore, acceptHMRUpdate } from "pinia";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/html";
import {
  GetAccountResult,
  GetContractResult,
  configureChains,
  createConfig,
} from "@wagmi/core";
import { arbitrum, mainnet, polygon } from "@wagmi/core/chains";
import { getAccount } from "@wagmi/core";
import { getABI } from "symfi-sdk"

interface Web3ModalProps {
  account: GetAccountResult;
  contract: GetContractResult;
  web3modal: Web3Modal;
}

export async function _initSdk(transport: any) {
  const abi = [
    'function decimals() public view returns (uint8)',
    'function deposit() public payable',
    'function withdraw(uint) public',
    'function transfer(address, uint) public returns (bool)',
    'function transferFrom(address, address, uint) public returns (bool)',
    'function approve(address, uint) public returns (bool)',
    'function balanceOf(address) public view returns (uint)',
    'function totalSupply() public view returns (uint)',
    'function allowance(address, address) public view returns (uint)',
    'event Transfer(address indexed, address indexed, uint)',
    'event Approval(address indexed, address indexed, uint)',
  ]
  await getABI(undefined, { weth: abi })
  //   const addressWETH = '0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6'
}
export const useWeb3ModalStore = defineStore({
  id: "web3-modal",
  state: () => ({
  } as Web3ModalProps),
  getters: {
    account: () => getAccount(),
    web3modal: (): Web3Modal => {
      const chains = [arbitrum, mainnet, polygon];
      const projectId = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID;

      const { publicClient } = configureChains(chains, [
        w3mProvider({ projectId }),
      ]);
      const wagmiConfig = createConfig({
        autoConnect: true,
        connectors: w3mConnectors({ projectId, chains }),
        publicClient,
      });
      const ethereumClient = new EthereumClient(wagmiConfig, chains);

      const web3modal = new Web3Modal({ projectId }, ethereumClient);
      return web3modal;
    },
  },
  actions: {
    async initSdk() {
      // 1. getWalletClient
      // 2. sdk
      // const walletClient = ;
      // console.log({ walletClient })
      // _initSdk(transport)
    }
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useWeb3ModalStore, import.meta.hot));
}
