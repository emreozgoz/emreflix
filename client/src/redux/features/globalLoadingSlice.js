import { createSlice } from "@reduxjs/toolkit";

export const globalLoadingSlice = createSlice({
  name: "Authmodal",
  initialState: {
    globalLoading: false,
  },
  reducers: {
    setGlobalLoading: (state, actions) => {
      state.appState = actions.payload;
    },
  },
});

export const { setGlobalLoading } = globalLoadingSlice.actions;
export default globalLoadingSlice.reducer;
