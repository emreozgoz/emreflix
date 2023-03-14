import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "User",
  initialState: {
    user: null,
    listFavorite: [],
  },
  reducers: {
    setUser: (state, action) => {
      if (action.payload === null) {
        localStorage.removeItem("actkn");
      } else {
        if (action.payload.token) {
          localStorage.setItem("actkn", action.payload.token);
        }
      }
      state.user = action.payload;
    },
    setListFavorites: (state, action) => {
      state.listFavorite = action.payload;
    },
    removeFavorite: (state, action) => {
      const { mediaId } = action.payload;
      state.listFavorite = [
        ...state.listFavorite.filter(
          (item) => item.mediaId.toString() !== mediaId.toString()
        ),
      ];
    },
    addFavorite: (state, action) => {
      state.listFavorite = [action.payload, ...state.listFavorite];
    },
  },
});

export const { setUser, setListFavorites, removeFavorite, addFavorite } =
  userSlice.actions;
export default userSlice.reducer;
