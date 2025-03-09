import * as SecureStore from "expo-secure-store";

const key = "authToken";

const storeToken = async (authToken: string) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (e) {
    console.log("Error storing the auth token", e);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (e) {
    console.log("Error getting the auth token", e);
  }
};

const removeToken = async () => {
  try {
    return await SecureStore.deleteItemAsync(key);
  } catch (e) {
    console.log("Error removing the auth token", e);
  }
};

export default {
  getToken,
  removeToken,
  storeToken,
};
