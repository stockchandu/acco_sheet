import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { auth: false },
  reducers: {
    isAuth: (state, action) => {
      state.auth = action.payload;
    },
  },
});

export const { isAuth } = authSlice.actions;

export default authSlice.reducer;
