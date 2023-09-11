import AsyncStorage from "@react-native-async-storage/async-storage";
import { DateTime } from "luxon";

const prefix = "cache";
const expiryInMinutes = 5;

const store = async (key: string, value: unknown) => {
  try {
    const item = {
      value,
      timestamp: DateTime.now().toISO(),
    };

    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (e) {
    console.log(e);
  }
};

const isExpired = (item: any) => {
  const now = DateTime.now();
  const storedTime = DateTime.fromISO(item.timestamp);
  const { minutes } = now.diff(storedTime, "minutes").toObject();
  console.log("Minutes passed: ", minutes);

  if (minutes) return minutes > expiryInMinutes;
};

const getStoreData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);

    if (value != null) {
      const item = JSON.parse(value);
      console.log("Item: ", item);

      if (!item) return null;

      if (isExpired(item)) {
        // Command Query Separation (CQS)
        await AsyncStorage.removeItem(prefix + key);
        console.log(`Item ${prefix + key} removed`);

        return null;
      }

      return item.value;
    }
  } catch (e) {
    console.log(e);
  }
};

export default {
  store,
  getStoreData,
};
