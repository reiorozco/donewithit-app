import { useEffect, useState } from "react";
import { Platform } from "react-native";
import * as Device from "expo-device";
import * as Location from "expo-location";

export default function useUserLocation() {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null,
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getCurrentLocation() {
      if (Platform.OS === "android" && !Device.isDevice) {
        setErrorMsg(
          "Doesn't work on Android emulators. Use a physical device.",
        );
        setLoading(false);
        return;
      }

      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("Permission denied to access the location.");
          setLoading(false);
          return;
        }

        const loc = await Location.getLastKnownPositionAsync({});
        setLocation(loc ?? null);
      } catch (error) {
        setErrorMsg("Error getting location.");
        console.error("Error getting location >" + error + "");
      } finally {
        setLoading(false);
      }
    }

    void getCurrentLocation();
  }, []);

  return { errorMsg, loading, location };
}
