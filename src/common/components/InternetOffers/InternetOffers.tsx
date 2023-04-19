import { t } from 'i18next';
import { MAIN_OFFER } from '../../../Logic';
import { Services } from '../../enums/Services';
import { mockCheckListContentService } from '../../mocks/checkListContentService';
import { mockPriceOfService } from '../../mocks/priceList';
import { Service } from '../../models/PriceOfService';
import { CheckListContentServiceItem } from '../../models/checkListContentService';
import {
  ServiceCardDescriptionText,
  ServiceCardPriceText,
  ServiceCardCurrencyText,
  ServiceCardFooter,
  ServiceCardCheckButton,
  ServiceCardWrapper,
  ServiceCardOffer,
  ServiceDescriptionWrapper,
  DescriptionServiceText,
  ImageService,
  ImageServiceWrapper,
  ServiceCardCheckListText,
} from '../MainTemplate/MainTemplate.styles';
import { InternetOffersWrapper } from './InternetOffers.styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import InternetImage from '../../assets/icons/internet.png';

const InternetOffers = () => {
  const handleCheckButtonClick = (service: Service | undefined) => {
    if (service) {
      alert(`Zamówiono ofertę: ${t(`offer.${service.nameOfService}`)} `);
    }
  };

  const yearOffer: number = useSelector(
    (state: RootState) => state.display.year
  );

  const InternetOfferService = mockPriceOfService.find(
    (service) => service.nameOfService === Services.INTERNET
  );

  const InternetOfferPerYear = InternetOfferService?.pricePerYear.find(
    (item) => item.year === yearOffer
  );

  const InternetOfferCheckList = mockCheckListContentService.find(
    (checkList) => checkList.nameOfService === Services.INTERNET
  );
  const OfferCenterHeader = (
    <>
      <ServiceCardDescriptionText>
        {t(`offer.${MAIN_OFFER}`)}
      </ServiceCardDescriptionText>
      <ServiceCardPriceText>
        {InternetOfferPerYear?.price} {InternetOfferPerYear?.currency}
      </ServiceCardPriceText>
      <ServiceCardCurrencyText>/{t('offer.month')}</ServiceCardCurrencyText>
    </>
  );

  const OfferCenterFooter = (
    <ServiceCardFooter>
      <ServiceCardCheckButton
        label={t('offer.check').toString()}
        icon="pi pi-chevron-right"
        iconPos="right"
        onClick={() => handleCheckButtonClick(InternetOfferService)}
      />
    </ServiceCardFooter>
  );

  return (
    <InternetOffersWrapper>
      <ServiceCardWrapper>
        <ServiceCardOffer footer={OfferCenterFooter} header={OfferCenterHeader}>
          {InternetOfferCheckList?.list.map(
            (menuItem: CheckListContentServiceItem) => {
              return (
                <>
                  <ServiceCardCheckListText>
                    <i className="pi pi-check" />
                    {t(menuItem.text)}
                  </ServiceCardCheckListText>
                </>
              );
            }
          )}
        </ServiceCardOffer>
      </ServiceCardWrapper>
      <ServiceDescriptionWrapper>
        <ImageServiceWrapper>
          <ImageService src={InternetImage} alt="internet service" />
        </ImageServiceWrapper>
        <DescriptionServiceText>
          {t('internet.serviceDescription')}
        </DescriptionServiceText>
      </ServiceDescriptionWrapper>
    </InternetOffersWrapper>
  );
};
export default InternetOffers;
