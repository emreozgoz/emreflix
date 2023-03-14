import { createSlice } from "@reduxjs/toolkit";

export const themeModeSlice = createSlice({
  name: "ThemeMode",
  initialState: {
    themeMode: "dark",
  },
  reducers: {
    setThemeMode: (state, actions) => {
      state.themeMode = actions.payload;
    },
  },
});

export const { setThemeMode } = themeModeSlice.actions;
export default themeModeSlice.reducer;
