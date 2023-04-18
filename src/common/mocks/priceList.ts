import { Currency } from '../enums/Currency';
import { Services } from '../enums/Services';
import { Service } from '../models/PriceOfService';

export const mockPriceOfService: Service[] = [
  {
    nameOfService: Services.INTERNET,
    pricePerYear: [
      {
        year: 2023,
        price: 39,
        currency: Currency.PLN,
      },
      {
        year: 2024,
        price: 49,
        currency: Currency.PLN,
      },
      {
        year: 2025,
        price: 59,
        currency: Currency.PLN,
      },
    ],
  },
  {
    nameOfService: Services.TELEVISION,
    pricePerYear: [
      {
        year: 2023,
        price: 49,
        currency: Currency.PLN,
      },
      {
        year: 2024,
        price: 49,
        currency: Currency.PLN,
      },
      {
        year: 2025,
        price: 59,
        currency: Currency.PLN,
      },
    ],
  },
  {
    nameOfService: Services.INTERNET_TELEVISION,
    pricePerYear: [
      {
        year: 2023,
        price: 79,
        currency: Currency.PLN,
      },
      {
        year: 2024,
        price: 89,
        currency: Currency.PLN,
      },
      {
        year: 2025,
        price: 99,
        currency: Currency.PLN,
      },
    ],
  },
  {
    nameOfService: Services.INTERNET_CONTRACT,
    pricePerYear: [
      {
        year: 2023,
        price: 64,
        currency: Currency.PLN,
      },
      {
        year: 2024,
        price: 64,
        currency: Currency.PLN,
      },
      {
        year: 2025,
        price: 64,
        currency: Currency.PLN,
      },
    ],
  },
  {
    nameOfService: Services.CONTRACT,
    pricePerYear: [
      {
        year: 2023,
        price: 29,
        currency: Currency.PLN,
      },
      {
        year: 2024,
        price: 29,
        currency: Currency.PLN,
      },
      {
        year: 2025,
        price: 29,
        currency: Currency.PLN,
      },
    ],
  },
  {
    nameOfService: Services.DECODER,
    pricePerYear: [
      {
        year: 2023,
        price: 29,
        currency: Currency.PLN,
      },
      {
        year: 2024,
        price: 29,
        currency: Currency.PLN,
      },
      {
        year: 2025,
        price: 29,
        currency: Currency.PLN,
      },
    ],
  },
  {
    nameOfService: Services.INTERNET_TELEVISION_DECODER,
    pricePerYear: [
      {
        year: 2023,
        price: 79,
        currency: Currency.PLN,
      },
      {
        year: 2024,
        price: 89,
        currency: Currency.PLN,
      },
      {
        year: 2025,
        price: 99,
        currency: Currency.PLN,
      },
    ],
  },
];
