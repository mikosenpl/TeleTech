import { t } from 'i18next';
import { Services } from '../../enums/Services';
import { mockCheckListContentService } from '../../mocks/checkListContentService';
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
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import InternetImage from '../../assets/icons/internet.png';
import { setDisplaySelectedService } from '../../store/slices/display/displaySlice';

const InternetOffers = () => {
  const dispatch = useDispatch();

  const allSelectedService: Service[] = useSelector(
    (state: RootState) => state.display.selectedServices
  );
  const allService: Service[] = useSelector((state: RootState) => state.display.services);
  const yearOffer: number = useSelector((state: RootState) => state.display.selectedYear);

  const InternetOfferService = allService.find(
    (service) => service.nameOfService === Services.INTERNET
  );
  const InternetOfferPerYear = InternetOfferService?.pricePerYear.find(
    (item) => item.year === yearOffer
  );
  const InternetOfferCheckList = mockCheckListContentService.find(
    (checkList) => checkList.nameOfService === Services.INTERNET
  );

  const handleCheckButtonClick = (service: Service | undefined) => {
    if (service) {
      const selectedService = [...allSelectedService, service];
      dispatch(setDisplaySelectedService(selectedService));
    }
  };

  const OfferCenterHeader = (
    <>
      <ServiceCardDescriptionText>{t(`offer.${Services.INTERNET}`)}</ServiceCardDescriptionText>
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
          {InternetOfferCheckList?.list.map((menuItem: CheckListContentServiceItem) => {
            return (
              <>
                <ServiceCardCheckListText>
                  <i className="pi pi-check" />
                  {t(menuItem.text)}
                </ServiceCardCheckListText>
              </>
            );
          })}
        </ServiceCardOffer>
      </ServiceCardWrapper>
      <ServiceDescriptionWrapper>
        <ImageServiceWrapper>
          <ImageService src={InternetImage} alt="Internet service" />
        </ImageServiceWrapper>
        <DescriptionServiceText>{t('service.internet.description')}</DescriptionServiceText>
      </ServiceDescriptionWrapper>
    </InternetOffersWrapper>
  );
};
export default InternetOffers;
