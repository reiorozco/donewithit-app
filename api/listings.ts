import apiClient from "@/api/client";
import { ListingData } from "@/screens/ListingEditScreen";

const listingsEndpoint = "/listings";

const getListings = async () => {
  const res = await apiClient.get(listingsEndpoint);

  if (res.status >= 200 && res.status < 300) return res.data;

  throw new Error(`Error getting listings: ${res.status}`);
};

const addListing = (
  listing: ListingData,
  onUploadProgress: (progress: number) => void,
) => {
  // if (listing.location)
  //   data.append("location", JSON.stringify(listing.location));

  return apiClient.post(listingsEndpoint, listing, {
    onUploadProgress: (progressEvent) => {
      console.log("Progress object: ", progressEvent);

      const ratio = progressEvent.loaded / (progressEvent.total || 1);
      onUploadProgress(ratio);
    },
  });
};

export default {
  addListing,
  getListings,
};
