import Listing from "../interfaces/listing";

import apiClient from "./client";

const endpoint = "/listings";

const getListings = () => apiClient.get<Listing[]>(endpoint);

export default {
  getListings,
};
