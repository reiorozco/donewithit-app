import apiClient from "@/api/client";

const listingsEndpoint = "/listings";

const getListings = () => apiClient.get(listingsEndpoint);

export default {
  getListings,
};
