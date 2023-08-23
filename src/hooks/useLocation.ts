import { useEffect, useState } from "react";
import * as Location from "expo-location";

const useLocation = () => {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  }>();
  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) return;

      const result = await Location.getLastKnownPositionAsync();
      if (result) {
        const {
          coords: { latitude, longitude },
        } = result;

        setLocation({ latitude, longitude });
      }
    } catch (e) {
      console.log("getLocationError: ", e);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};

export default useLocation;
