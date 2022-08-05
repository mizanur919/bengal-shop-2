import { createSlice } from "@reduxjs/toolkit";
import _banners from "../../components/subPages/Home/utils/categoryBannerData.json";

const initialState = {
  list: [],
  loading: false,
};

const bannersSlice = createSlice({
  name: "banners",
  initialState,
  reducers: {
    startFetch: (state) => {
      state.loading = true;
    },
    save: (state, action) => {
      const { payload } = action;
      state.loading = false;
      state.list = payload;
    },
  },
});

export const { startFetch, save } = bannersSlice.actions;

export const fetchAsyncBanners = () => {
  return async (dispatch) => {
    dispatch(save([]));
    dispatch(startFetch());

    const banners = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(_banners);
      }, 1000);
    });
    dispatch(save(banners));
  };
};

export default bannersSlice.reducer;
