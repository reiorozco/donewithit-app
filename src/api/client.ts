import { create, ApiResponse } from "apisauce";
import { AxiosRequestConfig } from "axios";
import cache from "../utility/cache";

// define the api
const apiClient = create({
  baseURL: "http://192.168.1.4:9000/api",
});

const get = apiClient.get;

apiClient.get = async <T, U = T>(
  url: string,
  params?: {},
  axiosConfig?: AxiosRequestConfig
): Promise<ApiResponse<T, U>> => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    await cache.store(url, response.data);

    return response;
  }

  const data = await cache.getStoreData(url);
  return data ? { ok: true, data } : response;
};

export default apiClient;
