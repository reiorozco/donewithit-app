import { create } from "apisauce";

// define the api
const apiClient = create({
  baseURL: "http://192.168.1.4:9000/api",
});

export default apiClient;
