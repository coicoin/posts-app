import {
  createEntityAdapter,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { TPost } from "@/entities/post/model/types";
import type { RootState } from "@/app/providers/store/store";

const postsAdapter = createEntityAdapter({
  selectId: (post: TPost) => post.id,
});

const postAdapter = postsAdapter.getInitialState({
  count: 0,
});

export const postSlice = createSlice({
  name: "post",
  initialState: postAdapter,
  reducers: {
    setPosts: (state, action: PayloadAction<TPost[]>) => {
      postsAdapter.setAll(state, action.payload); // Immer inside immutate it
      state.count = state.ids.length;
    },
    addPost: (state, action: PayloadAction<TPost>) => {
      postsAdapter.addOne(state, action.payload);
    },
  },
});

export const { setPosts, addPost } = postSlice.actions;
export default postSlice.reducer;
export const postsSelectors = postsAdapter.getSelectors<RootState>(
  (state) => state.post,
);
