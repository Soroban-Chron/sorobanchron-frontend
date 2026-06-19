import { useState, useCallback } from "react";
import {
  isConnected,
  getAddress,
  getNetworkDetails,
  signTransaction,
} from "@stellar/freighter-api";
import type { FreighterState } from "@/types";
import { ERRORS } from "@/lib/constants";

/**
 * Hook for managing Freighter wallet connection and transactions
 */
export function useFreighter() {
  const [state, setState] = useState<FreighterState>({
    address: null,
    connected: false,
    network: null,
  });
  const [error, setError] = useState<string | null>(null);

  const connect = useCallback(async () => {
    try {
      setError(null);
      const { isConnected: ok } = await isConnected();
      if (!ok) {
        throw new Error(ERRORS.FREIGHTER_NOT_INSTALLED);
      }

      const { address } = await getAddress();
      const { networkPassphrase } = await getNetworkDetails();

      setState({ address, connected: true, network: networkPassphrase });
      return address;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      setError(errorMessage);
      throw err;
    }
  }, []);

  const sign = useCallback(
    async (xdr: string) => {
      try {
        if (!state.address) {
          throw new Error(ERRORS.NOT_CONNECTED);
        }
        const { signedTxXdr } = await signTransaction(xdr, {
          networkPassphrase: state.network ?? undefined,
          address: state.address,
        });
        return signedTxXdr;
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : String(err);
        setError(errorMessage);
        throw err;
      }
    },
    [state]
  );

  const disconnect = useCallback(() => {
    setState({
      address: null,
      connected: false,
      network: null,
    });
    setError(null);
  }, []);

  return { ...state, error, connect, sign, disconnect };
}
