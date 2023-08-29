import Listing from "../interfaces/listing";

import apiClient from "./client";

const ENDPOINT = "/listings";

const getListings = () => apiClient.get<Listing[]>(ENDPOINT);

const addListing = ({
  title,
  categoryId,
  price,
  images,
  description,
  location,
}: Listing) => {
  // content-type
  const data = new FormData();
  data.append("title", title);
  data.append("price", price.toString());
  data.append("categoryId", categoryId.toString());

  if (description) data.append("description", description);

  images.forEach((image, index) =>
    data.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image,
    } as unknown as Blob)
  );

  if (location) data.append("location", JSON.stringify(location));

  return apiClient.post(ENDPOINT, data);
};

export default {
  getListings,
  addListing,
};
