export interface Service {
  nameOfService: string;
  pricePerYear: PricePerYear[];
}

export interface PricePerYear {
  year: number;
  price: number;
  currency: string;
}
