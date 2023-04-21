import { useDispatch, useSelector } from 'react-redux';
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
  YearPicker,
} from './SummaryField.styles';
import { Service } from '../../models/PriceOfService';
import { DataView } from 'primereact/dataview';
import { Button } from 'primereact/button';
import { useTranslation } from 'react-i18next';
import { mockPriceOfSpecialOfferServices } from '../../mocks/priceList';
import { TotalPriceResponse, calculateTheTotalPrice } from '../../utils/calculateTheTotalPrice';
import { Year } from '../../enums/Years';
import { setDisplayYear } from '../../store/slices/display/displaySlice';
import { Promotion } from '../../models/Promotion';
import { useState } from 'react';

const SummaryField = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const possiblyYearPicker = [Year._2023, Year._2024, Year._2025];

  const yearOffer: number = useSelector((state: RootState) => state.display.year);
  const allSelectedService: Service[] = useSelector(
    (state: RootState) => state.display.selectedServices
  );

  let calculatedTotalPrice = calculateTheTotalPrice(
    allSelectedService,
    yearOffer,
    mockPriceOfSpecialOfferServices
  );

  const handleChangeYear = (selectedYear: number) => {
    dispatch(setDisplayYear(selectedYear));
  };

  const itemTemplate = (item: Service) => {
    const itemPrice = item.pricePerYear?.find((item) => item.year === yearOffer);
    return (
      <SummaryListItem>
        <SummaryListItemLeft>
          <SummaryListItemLeftArea>
            <SummaryServiceNameText>{t(`offer.${item.nameOfService}`)}</SummaryServiceNameText>
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
        <SummaryText>{t('offer.yearPicker')}</SummaryText>
        <YearPicker
          value={yearOffer}
          onChange={(e) => handleChangeYear(e.value)}
          options={possiblyYearPicker}
          placeholder="Select a City"
        />
        <SummaryText>{t('offer.summaryList.header')}</SummaryText>
        <DataView
          value={allSelectedService}
          itemTemplate={itemTemplate}
          emptyMessage={t('offer.summaryList.empty').toString()}
        />
      </div>

      <SummaryButtonArea>
        {calculatedTotalPrice.promotion ? (
          <>
            <SummaryText>{t('offer.promotionalOffers')}</SummaryText>
            <SummaryServiceNameText>
              {t(`offer.${calculatedTotalPrice.promotion.promotionService.nameOfService}`)}
            </SummaryServiceNameText>
          </>
        ) : (
          <></>
        )}
        <SummaryText>{t('offer.sumUp')}</SummaryText>
        <SummaryButton label={calculatedTotalPrice.totalPrice.toString()}></SummaryButton>
      </SummaryButtonArea>
    </SummaryFieldWrapper>
  );
};

export default SummaryField;
