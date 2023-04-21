import { Services } from '../../enums/Services';
import { TelevisionOffersWrapper } from './TelevisionOffers.styles';
import TelevisionImage from '../../assets/icons/television.png';
import { t } from 'i18next';
import { useDispatch, useSelector } from 'react-redux';
import { mockCheckListContentService } from '../../mocks/checkListContentService';
import { mockPriceOfService } from '../../mocks/priceList';
import { Service } from '../../models/PriceOfService';
import { CheckListContentServiceItem } from '../../models/checkListContentService';
import { setDisplaySelectedService } from '../../store/slices/display/displaySlice';
import { RootState } from '../../store/store';
import {
  ServiceCardDescriptionText,
  ServiceCardPriceText,
  ServiceCardCurrencyText,
  ServiceCardFooter,
  ServiceCardCheckButton,
  ServiceCardWrapper,
  ServiceCardOffer,
  ServiceCardCheckListText,
  ServiceDescriptionWrapper,
  ImageServiceWrapper,
  ImageService,
  DescriptionServiceText,
} from '../MainTemplate/MainTemplate.styles';

const TelevisionOffers = () => {
  const dispatch = useDispatch();

  const allSelectedService: Service[] = useSelector(
    (state: RootState) => state.display.selectedServices
  );

  const handleCheckButtonClick = (service: Service | undefined) => {
    if (service) {
      const selectedService = [...allSelectedService, service];
      dispatch(setDisplaySelectedService(selectedService));
    }
  };

  const yearOffer: number = useSelector((state: RootState) => state.display.year);

  const TelevisionOfferService = mockPriceOfService.find(
    (service) => service.nameOfService === Services.TELEVISION
  );

  const TelevisionOfferPerYear = TelevisionOfferService?.pricePerYear.find(
    (item) => item.year === yearOffer
  );

  const TelevisionOfferCheckList = mockCheckListContentService.find(
    (checkList) => checkList.nameOfService === Services.TELEVISION
  );
  const OfferCenterHeader = (
    <>
      <ServiceCardDescriptionText>{t(`offer.${Services.TELEVISION}`)}</ServiceCardDescriptionText>
      <ServiceCardPriceText>
        {TelevisionOfferPerYear?.price} {TelevisionOfferPerYear?.currency}
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
        onClick={() => handleCheckButtonClick(TelevisionOfferService)}
      />
    </ServiceCardFooter>
  );

  return (
    <TelevisionOffersWrapper>
      <ServiceCardWrapper>
        <ServiceCardOffer footer={OfferCenterFooter} header={OfferCenterHeader}>
          {TelevisionOfferCheckList?.list.map((menuItem: CheckListContentServiceItem) => {
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
          <ImageService src={TelevisionImage} alt="television service" />
        </ImageServiceWrapper>
        <DescriptionServiceText>{t('television.serviceDescription')}</DescriptionServiceText>
      </ServiceDescriptionWrapper>
    </TelevisionOffersWrapper>
  );
};

export default TelevisionOffers;
