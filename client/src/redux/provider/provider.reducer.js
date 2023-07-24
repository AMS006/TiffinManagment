import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  provider: undefined,
  allProviders: undefined,
  isProvider: false,
  loading: false,
  error: "",
  providerRegister: false,
};
const providerSlice = createSlice({
  name: "Provider",
  initialState,
  reducers: {
    providerRequest: (state) => {
      state.loading = true;
      state.provider = "";
      state.error = "";
    },
    singleProviderSuccess: (state, action) => {
      state.provider = action.payload.provider;
      state.loading = false;
    },
    providerSuccess: (state, action) => {
      state.provider = action.payload;
      state.loading = false;
      state.isProvider = true;
    },
    clearError: (state, action) => {
      state.loading = false;
      state.error = undefined;
    },
    providerRegistrationSuccess: (state, action) => {
      state.loading = false;
      state.isProvider = false;
      state.providerRegister = true;
    },
    allProvidersSuccess: (state, action) => {
      state.loading = false;
      state.allProviders = action.payload.allProviders;
    },
    allProvidersFail: (state) => {
      state.loading = false;
      state.allProviders = undefined;
    },
    providerFail: (state, action) => {
      state.provider = undefined;
      state.loading = false;
      state.error = action.payload;
    },
    providerLogout: (state) => {
      state.provider = undefined;
      state.isProvider = false;
      state.loading = false;
    },
  },
});

export const {
  providerRequest,
  providerSuccess,
  providerFail,
  clearError,
  providerLogout,
  allProvidersSuccess,
  allProvidersFail,
  singleProviderSuccess,
  providerRegistrationSuccess,
} = providerSlice.actions;

export default providerSlice.reducer;
