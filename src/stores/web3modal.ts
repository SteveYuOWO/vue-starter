import { defineStore, acceptHMRUpdate } from "pinia";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/html";
import { configureChains, createConfig } from "@wagmi/core";
import { arbitrum, mainnet, polygon } from "@wagmi/core/chains";

export const useWeb3ModalStore = defineStore({
  id: "web3-modal",
  state: () => ({
    rawWeb3modal: undefined,
  }),
  getters: {
    web3modal: (state): Web3Modal => {
      const rawWeb3modal = state.rawWeb3modal;
      if (rawWeb3modal) {
        return rawWeb3modal;
      }
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
