import client from "./client";
import { ExpoPushToken } from "expo-notifications";

const register = (pushToken: ExpoPushToken) =>
  client.post("/expoPushTokens", { token: pushToken });

export default {
  register,
};
