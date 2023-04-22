import { t } from 'i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Services } from '../../enums/Services';
import { mockCheckListContentService } from '../../mocks/checkListContentService';
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
import { ContractOffersWrapper } from './ContractOffers.styles';
import ContractImage from '../../assets/icons/phone.png';

const ContractOffers = () => {
  const dispatch = useDispatch();

  const allSelectedService: Service[] = useSelector(
    (state: RootState) => state.display.selectedServices
  );
  const allService: Service[] = useSelector((state: RootState) => state.display.services);
  const yearOffer: number = useSelector((state: RootState) => state.display.selectedYear);

  const ContractOfferService = allService.find(
    (service) => service.nameOfService === Services.CONTRACT
  );
  const ContractOfferPerYear = ContractOfferService?.pricePerYear.find(
    (item) => item.year === yearOffer
  );
  const ContractOfferCheckList = mockCheckListContentService.find(
    (checkList) => checkList.nameOfService === Services.CONTRACT
  );

  const handleCheckButtonClick = (service: Service | undefined) => {
    if (service) {
      const selectedService = [...allSelectedService, service];
      dispatch(setDisplaySelectedService(selectedService));
    }
  };

  const OfferCenterHeader = (
    <>
      <ServiceCardDescriptionText>{t(`offer.${Services.CONTRACT}`)}</ServiceCardDescriptionText>
      <ServiceCardPriceText>
        {ContractOfferPerYear?.price} {ContractOfferPerYear?.currency}
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
        onClick={() => handleCheckButtonClick(ContractOfferService)}
      />
    </ServiceCardFooter>
  );

  return (
    <ContractOffersWrapper>
      <ServiceCardWrapper>
        <ServiceCardOffer footer={OfferCenterFooter} header={OfferCenterHeader}>
          {ContractOfferCheckList?.list.map((menuItem: CheckListContentServiceItem) => {
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
          <ImageService src={ContractImage} alt="contract service" />
        </ImageServiceWrapper>
        <DescriptionServiceText>{t('service.contract.description')}</DescriptionServiceText>
      </ServiceDescriptionWrapper>
    </ContractOffersWrapper>
  );
};

export default ContractOffers;
