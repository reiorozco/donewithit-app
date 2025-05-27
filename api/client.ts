import axios from "axios";
import authStorage from "@/context/storage";

const apiClient = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
});

// Add a request interceptor
apiClient.interceptors.request.use(
  async (config) => {
    // This function runs before the request is sent
    // It receives the request config object

    const authToken = await authStorage.getToken(); // Perform the asynchronous operation

    // If the token exists, add/update the header
    if (authToken) {
      // Ensure a header object exists
      config.headers = config.headers || {};
      config.headers["x-auth-token"] = authToken;
    }

    // Return the modified config
    return config;
  },
  (error) => {
    // This function handles request errors (e.g., configuration issues)
    // Do something with the request error
    return Promise.reject(error);
  },
);

export default apiClient;
