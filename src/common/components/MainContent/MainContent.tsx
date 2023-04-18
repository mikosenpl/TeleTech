import { useTranslation } from 'react-i18next';
import {
  CheckButton,
  CurrencyText,
  DescriptionOfferText,
  MainContentWrapper,
  OfferCenter,
  OfferCheckListText,
  OfferFooter,
  OfferSides,
  OffersWrapper,
  PriceText,
} from './MainContent.styles';
import { mockPriceOfService } from '../../mocks/priceList';
import { Services } from '../../enums/Services';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { CheckListContentServiceItem } from '../../models/checkListContentService';
import { mockCheckListContentService } from '../../mocks/checkListContentService';
import { LEFT_OFFER, MAIN_OFFER, RIGHT_OFFER } from '../../../Logic';
import { setSelectedService } from '../../store/slices/display/displaySlice';
import { Service } from '../../models/PriceOfService';

const MainContent = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const yearOffer: number = useSelector(
    (state: RootState) => state.display.year
  );

  const allSelectedService: Service[] = useSelector(
    (state: RootState) => state.display.selectedServices
  );

  const MainSpecialOfferService = mockPriceOfService.find(
    (service) => service.nameOfService === MAIN_OFFER
  );
  const MainSpecialOffer = MainSpecialOfferService?.pricePerYear.find(
    (item) => item.year === yearOffer
  );
  const MainSpecialOfferCheckList = mockCheckListContentService.find(
    (checkList) => checkList.nameOfService === Services.INTERNET_TELEVISION
  );

  const SecondSpecialOfferService = mockPriceOfService.find(
    (service) => service.nameOfService === LEFT_OFFER
  );
  const SecondSpecialOffer = SecondSpecialOfferService?.pricePerYear.find(
    (item) => item.year === yearOffer
  );

  const SecondSpecialOfferCheckList = mockCheckListContentService.find(
    (checkList) => checkList.nameOfService === Services.INTERNET_CONTRACT
  );

  const ThirdSpecialOfferService = mockPriceOfService.find(
    (service) => service.nameOfService === RIGHT_OFFER
  );

  const ThirdSpecialOffer = ThirdSpecialOfferService?.pricePerYear.find(
    (item) => item.year === yearOffer
  );

  const ThirdSpecialOfferCheckList = mockCheckListContentService.find(
    (checkList) =>
      checkList.nameOfService === Services.INTERNET_TELEVISION_DECODER
  );

  const handleCheckButtonClick = (service: Service | undefined) => {
    if (service) {
      const selectedService = [...allSelectedService, service];
      dispatch(setSelectedService(selectedService));
    }
  };

  const OfferCenterHeader = (
    <>
      <DescriptionOfferText>{t(`offer.${MAIN_OFFER}`)}</DescriptionOfferText>
      <PriceText>
        {MainSpecialOffer?.price} {MainSpecialOffer?.currency}
      </PriceText>
      <CurrencyText>/{t('offer.month')}</CurrencyText>
    </>
  );
  const OfferCenterFooter = (
    <OfferFooter>
      <CheckButton
        label={t('offer.check').toString()}
        icon="pi pi-chevron-right"
        iconPos="right"
        onClick={() => handleCheckButtonClick(MainSpecialOfferService)}
      />
    </OfferFooter>
  );

  const OfferLeftHeader = (
    <>
      <DescriptionOfferText>{t(`offer.${LEFT_OFFER}`)}</DescriptionOfferText>
      <PriceText>
        {SecondSpecialOffer?.price} {SecondSpecialOffer?.currency}
      </PriceText>
      <CurrencyText>/{t('offer.month')}</CurrencyText>
    </>
  );
  const OfferLeftFooter = (
    <OfferFooter>
      <CheckButton
        label={t('offer.check').toString()}
        icon="pi pi-chevron-right"
        iconPos="right"
        onClick={() => handleCheckButtonClick(SecondSpecialOfferService)}
      />
    </OfferFooter>
  );

  const OfferRightHeader = (
    <>
      <DescriptionOfferText>{t(`offer.${RIGHT_OFFER}`)}</DescriptionOfferText>
      <PriceText>
        {ThirdSpecialOffer?.price} {ThirdSpecialOffer?.currency}
      </PriceText>
      <CurrencyText>/{t('offer.month')}</CurrencyText>
    </>
  );
  const OfferRightFooter = (
    <OfferFooter>
      <CheckButton
        label={t('offer.check').toString()}
        icon="pi pi-chevron-right"
        iconPos="right"
        onClick={() => handleCheckButtonClick(ThirdSpecialOfferService)}
      />
    </OfferFooter>
  );

  return (
    <MainContentWrapper>
      <OffersWrapper>
        <OfferSides footer={OfferLeftFooter} header={OfferLeftHeader}>
          {SecondSpecialOfferCheckList?.list.map(
            (menuItem: CheckListContentServiceItem) => {
              return (
                <>
                  <OfferCheckListText>
                    <i className="pi pi-check" />
                    {t(menuItem.text)}
                  </OfferCheckListText>
                </>
              );
            }
          )}
        </OfferSides>
        <OfferCenter footer={OfferCenterFooter} header={OfferCenterHeader}>
          {MainSpecialOfferCheckList?.list.map(
            (menuItem: CheckListContentServiceItem) => {
              return (
                <>
                  <OfferCheckListText>
                    <i className="pi pi-check" />
                    {t(menuItem.text)}
                  </OfferCheckListText>
                </>
              );
            }
          )}
        </OfferCenter>
        <OfferSides footer={OfferRightFooter} header={OfferRightHeader}>
          {ThirdSpecialOfferCheckList?.list.map(
            (menuItem: CheckListContentServiceItem) => {
              return (
                <>
                  <OfferCheckListText>
                    <i className="pi pi-check" />
                    {t(menuItem.text)}
                  </OfferCheckListText>
                </>
              );
            }
          )}
        </OfferSides>
      </OffersWrapper>
    </MainContentWrapper>
  );
};

export default MainContent;
