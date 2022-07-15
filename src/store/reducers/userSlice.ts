import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUserState {
  username: string;
}

const initialState: IUserState = {
  username: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
  },
});


export const userActions = userSlice.actions;
export const user = userSlice.reducer;