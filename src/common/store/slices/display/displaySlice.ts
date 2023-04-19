import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Year } from '../../../enums/Years';
import { Service } from '../../../models/PriceOfService';

export interface DisplayState {
  year: Year;
  selectedServices: Service[];
}

export const initialDisplayState: DisplayState = {
  year: Year._2023,
  selectedServices: [],
};

const displaySlice = createSlice({
  name: 'display',
  initialState: initialDisplayState,
  reducers: {
    setDisplayYear: (state, action) => {
      state.year = action.payload;
    },
    setDisplaySelectedService: (state, action: PayloadAction<Service[]>) => {
      const filterService = action.payload.filter((service) => {
        return (
          state.selectedServices.findIndex(
            (selectedServices) =>
              selectedServices.nameOfService === service.nameOfService
          ) === -1
        );
      });
      state.selectedServices = [...state.selectedServices, ...filterService];
    },
  },
});

export const { setDisplayYear, setDisplaySelectedService } =
  displaySlice.actions;

export default displaySlice.reducer;
