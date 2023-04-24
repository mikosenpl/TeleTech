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
import { calculateTheTotalPrice } from '../../utils/calculateTheTotalPrice';
import { removeSelectedService, setSelectedYear } from '../../store/slices/display/displaySlice';
import { Promotion } from '../../models/Promotion';

const SummaryField = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const years: number[] = useSelector((state: RootState) => state.display.years);
  const yearOffer: number = useSelector((state: RootState) => state.display.selectedYear);
  const allSelectedService: Service[] = useSelector(
    (state: RootState) => state.display.selectedServices
  );
  const allPromotions: Promotion[] = useSelector((state: RootState) => state.display.promotions);

  let calculatedTotalPrice = calculateTheTotalPrice(allSelectedService, yearOffer, allPromotions);

  const handleChangeYear = (selectedYear: number) => {
    dispatch(setSelectedYear(selectedYear));
  };

  const handleRemoveService = (serviceName: string) => {
    dispatch(removeSelectedService(serviceName));
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
          <Button
            icon="pi pi-times"
            severity="danger"
            aria-label="Cancel"
            onClick={() => handleRemoveService(item.nameOfService)}
          />
        </SummaryListItemRight>
      </SummaryListItem>
    );
  };

  return (
    <SummaryFieldWrapper>
      <div>
        <SummaryText>{t('offer.yearPicker')}</SummaryText>
        <YearPicker value={yearOffer} onChange={(e) => handleChangeYear(e.value)} options={years} />
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
