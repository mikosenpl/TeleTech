import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Year } from '../../../enums/Years';
import { PricePerYear, Service } from '../../../models/PriceOfService';
import { Promotion } from '../../../models/Promotion';
import { mockPriceOfService, mockPriceOfSpecialOfferServices } from '../../../mocks/priceList';
import { mockYears } from '../../../mocks/mockYears';

export interface DisplayState {
  selectedYear: Year;
  selectedServices: Service[];
  years: number[];
  services: Service[];
  promotions: Promotion[];
  feedbackServiceMessage?: string;
  feedbackYearMessage?: string;
}

export const initialDisplayState: DisplayState = {
  selectedYear: mockYears[0],
  selectedServices: [],
  years: mockYears,
  services: mockPriceOfService,
  promotions: mockPriceOfSpecialOfferServices,
};

const displaySlice = createSlice({
  name: 'display',
  initialState: initialDisplayState,
  reducers: {
    setSelectedYear: (state, action) => {
      state.selectedYear = action.payload;
    },
    addYear: (state, action: PayloadAction<Year>) => {
      state.years = [...state.years, action.payload];
    },
    setSelectedService: (state, action: PayloadAction<Service[]>) => {
      const filterService = action.payload.filter((service) => {
        return (
          state.selectedServices.findIndex(
            (selectedServices) => selectedServices.nameOfService === service.nameOfService
          ) === -1
        );
      });
      state.selectedServices = [...state.selectedServices, ...filterService];
    },
    removeSelectedService: (state, action: PayloadAction<string>) => {
      state.selectedServices = state.selectedServices.filter(
        (service) => service.nameOfService !== action.payload
      );
    },
    addService: (state, action: PayloadAction<Service>) => {
      state.services = [...state.services, action.payload];
    },
    updateService: (
      state,
      action: PayloadAction<{ nameOfService: string; pricePerYear: PricePerYear[] }>
    ) => {
      const index = state.services.findIndex(
        (service) => service.nameOfService === action.payload.nameOfService
      );
      if (index !== -1) {
        state.services[index].pricePerYear = action.payload.pricePerYear;
      }
    },
  },
});

export const {
  setSelectedYear,
  addYear,
  setSelectedService,
  removeSelectedService,
  addService,
  updateService,
} = displaySlice.actions;

export default displaySlice.reducer;
