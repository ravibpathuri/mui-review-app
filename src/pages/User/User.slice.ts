import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import IUser from "./types";

// Define a type for the slice state
export type UserState = {
  users: IUser[] | undefined;
  test: string;
};

const initialState: UserState = {
  users: [],
  test: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<IUser[]>) => {
      state.users = action.payload;
    },
    clearUsers: (state) => {
      console.log("we are here to clear users");
      state.users = [];
      state.test = "cleard";
    },
  },
});

export const { setUsers, clearUsers } = userSlice.actions;

export default userSlice.reducer;
