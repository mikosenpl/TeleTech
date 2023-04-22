import { Service } from '../models/PriceOfService';
import { Promotion } from '../models/Promotion';

export interface TotalPriceResponse {
  totalPrice: number;
  promotion?: Promotion;
}

interface PossiblyTotalPrice {
  totalPrice: number;
  promotion: Promotion;
}

export const calculateTheTotalPrice = (
  services: Service[],
  year: number,
  promotionsList: Promotion[]
): TotalPriceResponse => {
  let promotionFlag = true;
  let serviceArrayHelper: Service[] = services;
  let promotions: Promotion[] = [];

  let finalPromotion: Promotion;
  let finalTotalPrice = 0;
  let finalResponse: TotalPriceResponse;

  for (let promotionListItem of promotionsList) {
    promotionFlag = true;
    for (let i = 0; i < promotionListItem.nameOfServices.length; i++) {
      if (
        !services.some((service) => service.nameOfService === promotionListItem.nameOfServices[i])
      ) {
        promotionFlag = false;
      }
    }
    if (promotionFlag == true) {
      promotions.push(promotionListItem);
    }
  }

  if (promotions.length > 0) {
    promotions.sort(
      (a, b) => b.promotionService.nameOfService.length - a.promotionService.nameOfService.length
    );

    let totalPriceForCurrentPromotion = 0;
    let possiblePrices: PossiblyTotalPrice[] = [];

    for (let i = 0; i < promotions.length; i++) {
      totalPriceForCurrentPromotion = 0;
      serviceArrayHelper = services;

      let priceForSelectedYear = promotions[i].promotionService.pricePerYear.find(
        (price) => price.year === year
      )?.price;

      if (priceForSelectedYear) {
        totalPriceForCurrentPromotion += priceForSelectedYear;
      }

      serviceArrayHelper = services.filter(
        (service) => ![...promotions[i].nameOfServices].includes(service.nameOfService)
      );

      for (let i = 0; i < serviceArrayHelper.length; i++) {
        let price = serviceArrayHelper[i].pricePerYear.find((price) => price.year === year)?.price;
        if (price) {
          totalPriceForCurrentPromotion += price;
        }
      }

      possiblePrices[i] = { promotion: promotions[i], totalPrice: totalPriceForCurrentPromotion };
    }

    possiblePrices.sort((a, b) => a.totalPrice - b.totalPrice);
    finalPromotion = possiblePrices[0].promotion;
    finalTotalPrice = possiblePrices[0].totalPrice;
    finalResponse = { promotion: finalPromotion, totalPrice: finalTotalPrice };
    return finalResponse;
  } else {
    for (let i = 0; i < services.length; i++) {
      let price = services[i].pricePerYear.find((price) => price.year === year)?.price;
      if (price) {
        finalTotalPrice += price;
      }
    }
    finalResponse = { totalPrice: finalTotalPrice };
    return finalResponse;
  }
};
