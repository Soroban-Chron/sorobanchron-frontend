import { useState, useCallback } from "react";
import {
  isConnected,
  getAddress,
  getNetworkDetails,
  signTransaction,
} from "@stellar/freighter-api";
import type { FreighterState } from "@/types";

export function useFreighter() {
  const [state, setState] = useState<FreighterState>({
    address: null,
    connected: false,
    network: null,
  });

  const connect = useCallback(async () => {
    const { isConnected: ok } = await isConnected();
    if (!ok) throw new Error("Freighter not installed");

    const { address } = await getAddress();
    const { networkPassphrase } = await getNetworkDetails();

    setState({ address, connected: true, network: networkPassphrase });
    return address;
  }, []);

  const sign = useCallback(
    async (xdr: string) => {
      if (!state.address) throw new Error("Not connected");
      const { signedTxXdr } = await signTransaction(xdr, {
        networkPassphrase: state.network ?? undefined,
        address: state.address,
      });
      return signedTxXdr;
    },
    [state]
  );

  return { ...state, connect, sign };
}
