import { useTranslation } from 'react-i18next';
import {
  CheckButton,
  CheckButtonCenter,
  CurrencyText,
  CurrencyTextCenter,
  DescriptionOfferText,
  DescriptionOfferTextCenter,
  MainContentWrapper,
  OfferCenter,
  OfferCheckListText,
  OfferCheckListTextCenter,
  OfferFooter,
  OfferSides,
  OffersWrapper,
  PriceText,
  PriceTextCenter,
} from './MainContent.styles';
import { mockPriceOfSpecialOfferServices } from '../../mocks/priceList';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { CheckListContentServiceItem } from '../../models/checkListContentService';
import { mockCheckListContentService } from '../../mocks/checkListContentService';
import { LEFT_OFFER, MAIN_OFFER, RIGHT_OFFER } from '../../../Logic';
import { Promotion } from '../../models/Promotion';

const MainContent = () => {
  const { t } = useTranslation();

  const yearOffer: number = useSelector(
    (state: RootState) => state.display.year
  );

  const MainSpecialOfferService = mockPriceOfSpecialOfferServices.find(
    (service) => service.promotionService.nameOfService === MAIN_OFFER
  );
  const MainSpecialOffer =
    MainSpecialOfferService?.promotionService.pricePerYear.find(
      (item) => item.year === yearOffer
    );
  const MainSpecialOfferCheckList = mockCheckListContentService.find(
    (checkList) => checkList.nameOfService === MAIN_OFFER
  );

  const SecondSpecialOfferService = mockPriceOfSpecialOfferServices.find(
    (service) => service.promotionService.nameOfService === LEFT_OFFER
  );
  const SecondSpecialOffer =
    SecondSpecialOfferService?.promotionService.pricePerYear.find(
      (item) => item.year === yearOffer
    );

  const SecondSpecialOfferCheckList = mockCheckListContentService.find(
    (checkList) => checkList.nameOfService === LEFT_OFFER
  );

  const ThirdSpecialOfferService = mockPriceOfSpecialOfferServices.find(
    (service) => service.promotionService.nameOfService === RIGHT_OFFER
  );

  const ThirdSpecialOffer =
    ThirdSpecialOfferService?.promotionService.pricePerYear.find(
      (item) => item.year === yearOffer
    );

  const ThirdSpecialOfferCheckList = mockCheckListContentService.find(
    (checkList) => checkList.nameOfService === RIGHT_OFFER
  );

  const handleCheckButtonClick = (service: Promotion | undefined) => {
    if (service) {
      alert(
        `Zamówiono ofertę: ${t(
          `offer.${service.promotionService.nameOfService}`
        )} `
      );
    }
  };

  const OfferCenterHeader = (
    <>
      <DescriptionOfferTextCenter>
        {t(`offer.${MAIN_OFFER}`)}
      </DescriptionOfferTextCenter>
      <PriceTextCenter>
        {MainSpecialOffer?.price} {MainSpecialOffer?.currency}
      </PriceTextCenter>
      <CurrencyTextCenter>/{t('offer.month')}</CurrencyTextCenter>
    </>
  );
  const OfferCenterFooter = (
    <OfferFooter>
      <CheckButtonCenter
        label={t('offer.order').toString()}
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
        label={t('offer.order').toString()}
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
        label={t('offer.order').toString()}
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
                  <OfferCheckListTextCenter>
                    <i className="pi pi-check" />
                    {t(menuItem.text)}
                  </OfferCheckListTextCenter>
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
