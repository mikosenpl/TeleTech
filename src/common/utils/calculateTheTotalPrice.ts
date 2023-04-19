import { Service } from '../models/PriceOfService';
import { Promotion } from '../models/Promotion';

export const calculateTheTotalPrice = (
  services: Service[],
  year: number,
  promotionsList: Promotion[]
) => {
  let promotionFlag = true;
  let fullPrice = 0;
  let serviceArrayHelper: Service[] = services;
  let promotions: Promotion[] = [];
  console.log('----------START FUNCTION--------------');

  for (const promotion of promotionsList) {
    promotionFlag = true;
    console.log('----------Start--------------');
    console.log(promotion);
    for (let i = 0; i < promotion.nameOfServices.length; i++) {
      console.log('----Promotion Name of service---------');
      console.log(promotion.nameOfServices[i]);
      if (
        !services.some(
          (service) => service.nameOfService === promotion.nameOfServices[i]
        )
      ) {
        console.log('----Odrzucono: na: ' + i);
        promotionFlag = false;
      }
      console.log('---------------end loop-------------');
    }
    if (promotionFlag == true) {
      promotions.push(promotion);
    }
  }
  console.log('Promottion: ');
  console.log(promotions);
  if (promotions.length > 0) {
    promotions.sort(
      (a, b) =>
        b.promotionService.nameOfService.length -
        a.promotionService.nameOfService.length
    );
    let price = promotions[0].promotionService.pricePerYear.find(
      (price) => price.year === year
    )?.price;
    if (price) {
      fullPrice += price;
    }

    serviceArrayHelper = services.filter(
      (service) =>
        ![...promotions[0].nameOfServices].includes(service.nameOfService)
    );
  }
  for (let y = 0; y < serviceArrayHelper.length; y++) {
    let price = serviceArrayHelper[y].pricePerYear.find(
      (price) => price.year === year
    )?.price;
    if (price) {
      fullPrice += price;
    }
  }
  return fullPrice;
};
