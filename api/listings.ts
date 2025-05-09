import apiClient from "@/api/client";
import { ListingData } from "@/screens/ListingEditScreen";

const listingsEndpoint = "/listings";

const getListings = () => apiClient.get(listingsEndpoint);

const addListing = (
  listing: ListingData,
  onUploadProgress: (arg0: number) => void,
) => {
  // if (listing.location)
  //   data.append("location", JSON.stringify(listing.location));

  return apiClient.post(listingsEndpoint, listing, {
    onUploadProgress: (progress) => {
      console.log("Progress object: ", progress);

      return onUploadProgress(progress.loaded / (progress.total || 1));
    },
  });
};

export default {
  addListing,
  getListings,
};
