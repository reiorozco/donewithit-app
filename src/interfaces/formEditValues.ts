export default interface FormEditValues {
  title: string;
  price: string;
  description?: string;
  category: {
    backgroundColor: string;
    label: string;
    name: string;
    value: number;
  } | null;
  images: string[];
}
