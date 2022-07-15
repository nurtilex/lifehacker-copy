import { RootState } from "../index";

export const selectUsername = (state: RootState) => state.user.username;
