import { createSlice } from "@reduxjs/toolkit";

export const appStateSlice = createSlice({
  name: "appState",
  initialState: {
    appState: "",
  },
  reducers: {
    setAppState: (state, actions) => {
      state.appState = actions.payload;
    },
  },
});

export const { setAppState } = appStateSlice.actions;
export default appStateSlice.reducer;