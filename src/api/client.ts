import { create } from "apisauce";

// define the api
const apiClient = create({
  baseURL: "http://192.168.1.14:9000/api",
});

export default apiClient;
