import { useEffect, useState } from "react";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";

export default function useNetworkStatus() {
  const [networkState, setNetworkState] = useState<NetInfoState | null>(null);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setNetworkState(state);
    });

    // Fetch the initial state once (important for SSR or shallow render)
    NetInfo.fetch().then(setNetworkState);

    return () => unsubscribe(); // Clean up listener
  }, []);

  return {
    details: networkState,
    isConnected: networkState?.isConnected ?? false,
    isInternetReachable: networkState?.isInternetReachable ?? false,
    type: networkState?.type ?? "unknown",
  };
}
