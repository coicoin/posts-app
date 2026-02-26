import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "@/app/providers/store/store";
import type { TUser } from "@/entities/user/model/types";

const usersAdapter = createEntityAdapter({
  selectId: (user: TUser) => user.id,
  sortComparer: (a, b) => a.id - b.id,
});

export const userSlice = createSlice({
  name: "user",
  initialState: usersAdapter.getInitialState(),
  reducers: {
    setUsers: usersAdapter.setAll,
    addUser: usersAdapter.addOne,
  },
});

export const { setUsers, addUser } = userSlice.actions;
export default userSlice.reducer;
export const usersSelectors = usersAdapter.getSelectors<RootState>(
  (state) => state.user,
);
