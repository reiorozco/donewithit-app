import Listing from "../interfaces/listing";
import FormEditValues from "../interfaces/formEditValues";

import apiClient from "./client";

const ENDPOINT = "/listings";

interface AddListingT extends FormEditValues {
  location?: {
    latitude: number;
    longitude: number;
  };
}

const getListings = () => apiClient.get<Listing[]>(ENDPOINT);

const addListing = ({
  title,
  category,
  price,
  images,
  description,
  location,
}: AddListingT) => {
  const data = new FormData();
  data.append("title", title);
  data.append("price", price);

  if (category) data.append("categoryId", category.value.toString());
  if (description) data.append("description", description);
  if (location) data.append("location", JSON.stringify(location));

  images.forEach((image, index) =>
    data.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image,
    } as unknown as Blob)
  );

  return apiClient.post(ENDPOINT, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export default {
  getListings,
  addListing,
};
