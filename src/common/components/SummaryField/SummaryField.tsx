import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { SummaryFieldWrapper } from './SummaryField.styles';
import { Service } from '../../models/PriceOfService';

const SummaryField = () => {
  const yearOffer: number = useSelector(
    (state: RootState) => state.display.year
  );
  const allSelectedService: Service[] = useSelector(
    (state: RootState) => state.display.selectedServices
  );

  const calculateTotalPriceForYear = (
    services: Service[],
    year: number
  ): number => {
    let total = 0;
    services.forEach((service) => {
      const priceForYear = service.pricePerYear.find(
        (price) => price.year === year
      );
      if (priceForYear) {
        total += priceForYear.price;
      }
    });
    return total;
  };
  return (
    <SummaryFieldWrapper>
      <p>{calculateTotalPriceForYear(allSelectedService, yearOffer)}</p>
    </SummaryFieldWrapper>
  );
};

export default SummaryField;
