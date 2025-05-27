import AsyncStorage from "@react-native-async-storage/async-storage";
import dayjs from "dayjs";

const prefix = "cache_";
const expiryInMinutes = 5;

type CacheItem<T> = {
  value: T;
  timestamp: number;
};

const store = async <T>(key: string, value: T): Promise<void> => {
  try {
    const item: CacheItem<T> = {
      timestamp: Date.now(),
      value,
    };
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    console.error(`Error storing cache for key "${key}":`, error);
  }
};

const isExpired = (timestamp: number): boolean => {
  const now = dayjs();
  const storedTime = dayjs(timestamp);
  return now.diff(storedTime, "minute") > expiryInMinutes;
};

const get = async <T>(key: string): Promise<T | null> => {
  try {
    const rawValue = await AsyncStorage.getItem(prefix + key);
    if (!rawValue) return null;

    const item: CacheItem<T> = JSON.parse(rawValue);

    if (isExpired(item.timestamp)) {
      await AsyncStorage.removeItem(prefix + key); // CQS
      return null;
    }

    return item.value;
  } catch (error) {
    console.error(`Error retrieving cache for key "${key}":`, error);
    return null;
  }
};

const remove = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(prefix + key);
  } catch (error) {
    console.error(`Error removing cache for key "${key}":`, error);
  }
};

export default {
  get,
  remove,
  store,
};
