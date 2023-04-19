import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import {
  SummaryButton,
  SummaryButtonArea,
  SummaryFieldWrapper,
  SummaryListItem,
  SummaryListItemLeft,
  SummaryListItemLeftArea,
  SummaryListItemRight,
  SummaryPriceText,
  SummaryServiceNameText,
  SummaryText,
} from './SummaryField.styles';
import { PricePerYear, Service } from '../../models/PriceOfService';
import { useState } from 'react';
import { DataView } from 'primereact/dataview';
import { Button } from 'primereact/button';
import { useTranslation } from 'react-i18next';
import { Services } from '../../enums/Services';
import { Promotion } from '../../models/Promotion';
import {
  mockPriceOfService,
  mockPriceOfSpecialOfferServices,
} from '../../mocks/priceList';
import { hasPromotion } from '../../utils/sumUp';

const SummaryField = () => {
  const { t } = useTranslation();
  const yearOffer: number = useSelector(
    (state: RootState) => state.display.year
  );
  const allSelectedService: Service[] = useSelector(
    (state: RootState) => state.display.selectedServices
  );

  hasPromotion(mockPriceOfService, 2023, mockPriceOfSpecialOfferServices);

  const calculatePriceOfServices = (
    services: Services[],
    year: number,
    promotions: Promotion[]
  ) => {
    let totalPrice = 0;
    let discountApplied = false;

    const getYearlyPrice = (
      serviceName: Services
    ): PricePerYear | undefined => {
      const service = mockPriceOfService.find(
        (s) => s.nameOfService === serviceName
      );

      if (!service) {
        return undefined;
      }

      return service.pricePerYear.find((price) => price.year === year);
    };

    services.forEach((serviceName) => {
      const yearlyPrice = getYearlyPrice(serviceName);

      if (yearlyPrice) {
        if (
          serviceName === Services.DECODER &&
          !services.includes(Services.TELEVISION)
        ) {
          return;
        }

        totalPrice += yearlyPrice.price;
      }
    });

    promotions.forEach((promotion) => {
      const intersection = services.filter((serviceName) =>
        promotion.nameOfServices.includes(serviceName)
      );

      if (
        intersection.length === promotion.nameOfServices.length &&
        !discountApplied
      ) {
        const promotionPrice = promotion.promotionService.pricePerYear.find(
          (price) => price.year === year
        );

        if (promotionPrice) {
          totalPrice = promotionPrice.price;
          discountApplied = true;
        }
      }
    });

    return totalPrice;
  };
  const itemTemplate = (item: Service) => {
    const itemPrice = item.pricePerYear?.find(
      (item) => item.year === yearOffer
    );
    return (
      <SummaryListItem>
        <SummaryListItemLeft>
          <SummaryListItemLeftArea>
            <SummaryServiceNameText>
              {t(`offer.${item.nameOfService}`)}
            </SummaryServiceNameText>
          </SummaryListItemLeftArea>
          <SummaryListItemLeftArea>
            <SummaryPriceText>
              {itemPrice?.price}
              {itemPrice?.currency}
            </SummaryPriceText>
            <SummaryPriceText></SummaryPriceText>
          </SummaryListItemLeftArea>
        </SummaryListItemLeft>
        <SummaryListItemRight>
          <Button icon="pi pi-times" severity="danger" aria-label="Cancel" />
        </SummaryListItemRight>
      </SummaryListItem>
    );
  };

  return (
    <SummaryFieldWrapper>
      <div>
        <SummaryText>{t('offer.summaryList.header')}</SummaryText>
        <DataView
          value={allSelectedService}
          itemTemplate={itemTemplate}
          emptyMessage={t('offer.summaryList.empty').toString()}
        />
      </div>
      <SummaryButtonArea>
        <SummaryText>{t('offer.sumUp')}</SummaryText>
        <SummaryButton
          label={calculatePriceOfServices(
            [Services.INTERNET, Services.TELEVISION],
            yearOffer,
            mockPriceOfSpecialOfferServices
          ).toString()}
        ></SummaryButton>
      </SummaryButtonArea>
    </SummaryFieldWrapper>
  );
};

export default SummaryField;
