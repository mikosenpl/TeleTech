import { Currency } from '../enums/Currency';
import { Services } from '../enums/Services';
import { Service } from '../models/PriceOfService';
import { Promotion } from '../models/Promotion';

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
];

export const mockPriceOfSpecialOfferServices: Promotion[] = [
  {
    nameOfServices: [Services.INTERNET, Services.TELEVISION],
    promotionService: {
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
  },
  {
    nameOfServices: [Services.INTERNET, Services.CONTRACT],
    promotionService: {
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
  },
  {
    nameOfServices: [Services.INTERNET, Services.TELEVISION, Services.DECODER],
    promotionService: {
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
  },
];
