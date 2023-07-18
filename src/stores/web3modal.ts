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
  getContract,
} from "@wagmi/core";
import { arbitrum, mainnet, polygon } from "@wagmi/core/chains";
import { getAccount, getWalletClient } from "@wagmi/core";

interface Web3ModalProps {
  account: GetAccountResult;
  contract: GetContractResult;
  web3modal: Web3Modal;
}
export const useWeb3ModalStore = defineStore({
  id: "web3-modal",
  state: () => ({} as Web3ModalProps),
  getters: {
    account: () => getAccount(),
    contract: (state) =>
      getContract({
        address: state.account.address as `0x${string}`,
        abi: `` as any,
        chainId: 0,
        walletClient: getWalletClient(), // viem client
      }),
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
  actions: {},
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useWeb3ModalStore, import.meta.hot));
}
