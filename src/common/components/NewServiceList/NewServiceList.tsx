import { useSelector } from 'react-redux';
import { PricePerYear, Service } from '../../models/PriceOfService';
import { RootState } from '../../store/store';
import { NewServiceWrapper, ServicesTable } from './NewServiceList.styles';
import { Promotion } from '../../models/Promotion';
import { useTranslation } from 'react-i18next';
import ServiceForm from '../ServiceForm/ServiceForm';

const NewServiceList = () => {
  const { t } = useTranslation();

  const allService: Service[] = useSelector((state: RootState) => state.display.services);
  const allPromotions: Promotion[] = useSelector((state: RootState) => state.display.promotions);
  const allYears: number[] = useSelector((state: RootState) => state.display.years);

  return (
    <NewServiceWrapper>
      <ServicesTable>
        <thead>
          <tr>
            <th>{t('serviceList.table.header.nameOfService')}</th>
            {allYears.map((year: number) => {
              return <th>{`${t('serviceList.table.header.nameOfService')} ${year}`}</th>;
            })}
            <th>{t('serviceList.table.header.actions')}</th>
          </tr>
        </thead>
        <tbody>
          {allService.map((service: Service) => {
            return (
              <tr>
                <td>{service.nameOfService}</td>
                {service.pricePerYear.map((price: PricePerYear) => {
                  return (
                    <td>
                      {price.price} {price.currency}
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
    </NewServiceWrapper>
  );
};

export default NewServiceList;
