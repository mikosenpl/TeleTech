import { t } from 'i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Services } from '../../enums/Services';
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
import { DekoderOffersWrapper } from './DecoderOffers.styles';
import DecoderImage from '../../assets/icons/decoder.png';

const DecoderOffers = () => {
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

  const yearOffer: number = useSelector(
    (state: RootState) => state.display.year
  );

  const DecoderOfferService = mockPriceOfService.find(
    (service) => service.nameOfService === Services.DECODER
  );

  const DecoderOfferPerYear = DecoderOfferService?.pricePerYear.find(
    (item) => item.year === yearOffer
  );

  const DecoderOfferCheckList = mockCheckListContentService.find(
    (checkList) => checkList.nameOfService === Services.DECODER
  );
  const OfferCenterHeader = (
    <>
      <ServiceCardDescriptionText>
        {t(`offer.${Services.DECODER}`)}
      </ServiceCardDescriptionText>
      <ServiceCardPriceText>
        {DecoderOfferPerYear?.price} {DecoderOfferPerYear?.currency}
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
        onClick={() => handleCheckButtonClick(DecoderOfferService)}
      />
    </ServiceCardFooter>
  );

  return (
    <DekoderOffersWrapper>
      <ServiceCardWrapper>
        <ServiceCardOffer footer={OfferCenterFooter} header={OfferCenterHeader}>
          {DecoderOfferCheckList?.list.map(
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
          <ImageService src={DecoderImage} alt="decoder service" />
        </ImageServiceWrapper>
        <DescriptionServiceText>
          {t('decoder.serviceDescription')}
        </DescriptionServiceText>
      </ServiceDescriptionWrapper>
    </DekoderOffersWrapper>
  );
};

export default DecoderOffers;