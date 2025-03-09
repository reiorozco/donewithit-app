/**
 * Custom API client that extends apisauce's default behavior.
 */
import { create, ApiResponse } from "apisauce";
import { AxiosRequestConfig } from "axios";
import cache from "../utility/cache";

// Define the api
const apiClient = create({
  baseURL: "http://192.168.1.7:9000/api",
});

const get = apiClient.get;

/**
 * Custom get method that handles caching of responses.
 *
 * @param url - The API endpoint URL.
 * @param params - Optional request parameters.
 * @param axiosConfig - Optional Axios request configuration.
 * @returns A promise that resolves to an ApiResponse.
 */
apiClient.get = async <T, U = T>(
  url: string,
  params?: Record<string, any>,
  axiosConfig?: AxiosRequestConfig
): Promise<ApiResponse<T, U>> => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    await cache.store(url, response.data);

    return response as ApiResponse<T, U>;
  }

  const data = await cache.getStoreData(url);
  return data
    ? ({ ok: true, data } as ApiResponse<T, U>)
    : (response as ApiResponse<T, U>);
};

export default apiClient;
