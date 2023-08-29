export default interface Listing {
  id: number;
  title: string;
  price: number;
  categoryId: number;
  userId: number;

  images: {
    url: string;
    thumbnailUrl: string;
  }[];

  description?: string;
  location?: {
    latitude: number;
    longitude: number;
  };
}
