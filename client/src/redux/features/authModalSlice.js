import { createSlice } from "@reduxjs/toolkit";

export const authModalSlice = createSlice({
  name: "Authmodal",
  initialState: {
    authModalOpen: false,
  },
  reducers: {
    setAuthModalOpen: (state, actions) => {
      state.appState = actions.payload;
    },
  },
});

export const { setAuthModalOpen } = authModalSlice.actions;
export default authModalSlice.reducer;
