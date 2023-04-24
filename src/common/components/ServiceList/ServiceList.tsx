import { useSelector } from 'react-redux';
import { PricePerYear, Service } from '../../models/PriceOfService';
import { RootState } from '../../store/store';
import { ServicesListWrapper, ServicesTable } from './ServiceList.styles';
import { Promotion } from '../../models/Promotion';
import { useTranslation } from 'react-i18next';
import ServiceForm from '../ServiceForm/ServiceForm';
import YearForm from '../YearForm/YearForm';

const ServiceList = () => {
  const { t } = useTranslation();

  const allService: Service[] = useSelector((state: RootState) => state.display.services);
  const allPromotions: Promotion[] = useSelector((state: RootState) => state.display.promotions);
  const allYears: number[] = useSelector((state: RootState) => state.display.years);

  return (
    <ServicesListWrapper>
      <YearForm />
      <ServicesTable>
        <thead>
          <tr>
            <th>{t('serviceList.table.header.nameOfService')}</th>
            {allYears.map((year: number) => {
              return <th key={year}>{`${t('serviceList.table.header.nameOfService')} ${year}`}</th>;
            })}
            <th>{t('serviceList.table.header.actions')}</th>
          </tr>
        </thead>
        <tbody>
          {allService.map((service: Service) => {
            return (
              <tr key={service.nameOfService}>
                <td>{service.nameOfService}</td>
                {allYears.map((currentYear: number) => {
                  let priceForCurrentYear = service.pricePerYear?.find(
                    (price: PricePerYear) => price.year === currentYear
                  );
                  return (
                    <td key={priceForCurrentYear?.year}>
                      {priceForCurrentYear?.price
                        ? `${priceForCurrentYear.price} ${priceForCurrentYear.currency}`
                        : ``}
                    </td>
                  );
                })}
                <td>
                  <ServiceForm service={service} />
                </td>
              </tr>
            );
          })}
          <tr>
            <td>
              <ServiceForm />
            </td>
          </tr>
        </tbody>
      </ServicesTable>
    </ServicesListWrapper>
  );
};

export default ServiceList;
