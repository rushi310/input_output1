export type TProductStatus = 'In-Progress' | 'Dispatched' | 'Delivered';

export interface Iproduct {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  status: TProductStatus;
  canReturn: boolean;
}
