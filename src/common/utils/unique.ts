import { Service } from '../models/PriceOfService';

export const isServiceNameUnique = (services: Service[], serviceName: string) => {
  return services.findIndex((service) => service.nameOfService === serviceName) === -1;
};

export const isYearsUnique = (years: number[], currentYear: number) => {
  return years.findIndex((year) => year === currentYear) === -1;
};

export const findServiceByName = (services: Service[], name: string) => {
  return services.find((service) => service.nameOfService === name);
};
