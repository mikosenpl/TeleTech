import { t } from 'i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Services } from '../../enums/Services';
import { mockCheckListContentService } from '../../mocks/checkListContentService';
import { Service } from '../../models/PriceOfService';
import { CheckListContentServiceItem } from '../../models/checkListContentService';
import { setSelectedService } from '../../store/slices/display/displaySlice';
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
import { Toast } from 'primereact/toast';
import { useRef } from 'react';
import { findServiceByName } from '../../utils/unique';

const DecoderOffers = () => {
  const dispatch = useDispatch();
  const toast = useRef<Toast>(null);
  const allSelectedService: Service[] = useSelector(
    (state: RootState) => state.display.selectedServices
  );
  const yearOffer: number = useSelector((state: RootState) => state.display.selectedYear);
  const allService: Service[] = useSelector((state: RootState) => state.display.services);

  const DecoderOfferService = allService.find(
    (service) => service.nameOfService === Services.DECODER
  );
  const DecoderOfferPerYear = DecoderOfferService?.pricePerYear.find(
    (item) => item.year === yearOffer
  );
  const DecoderOfferCheckList = mockCheckListContentService.find(
    (checkList) => checkList.nameOfService === Services.DECODER
  );

  const handleCheckButtonClick = (service: Service | undefined) => {
    if (service) {
      if (findServiceByName(allSelectedService, Services.TELEVISION)) {
        const selectedService = [...allSelectedService, service];
        dispatch(setSelectedService(selectedService));
      } else {
        toast.current?.show({
          severity: 'info',
          summary: t('info.decoderTVRequired'),
          life: 3000,
        });
      }
    }
  };

  const OfferCenterHeader = (
    <>
      <ServiceCardDescriptionText>{t(`offer.${Services.DECODER}`)}</ServiceCardDescriptionText>
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
      <Toast ref={toast} />
      <ServiceCardWrapper>
        <ServiceCardOffer footer={OfferCenterFooter} header={OfferCenterHeader}>
          {DecoderOfferCheckList?.list.map((menuItem: CheckListContentServiceItem) => {
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
          <ImageService src={DecoderImage} alt="decoder service" />
        </ImageServiceWrapper>
        <DescriptionServiceText>{t('service.decoder.description')}</DescriptionServiceText>
      </ServiceDescriptionWrapper>
    </DekoderOffersWrapper>
  );
};

export default DecoderOffers;
