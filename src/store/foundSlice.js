import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import $api from '../utils/axios';

const initialState = {
  posts: [],
  error: null,
  laoding: false,
  categories: [],
};

export const createPost = createAsyncThunk(
  'post/createPost',
  async (params) => {
    try {
      const { data } = await $api.post('/items/', params);
      return data;
    } catch (e) {
      console.log(e.message);
    }
  }
);

export const createCategories = createAsyncThunk(
  'post/createCategories',
  async ({ title }) => {
    try {
      const { data } = await $api.post('/categories/', { title });
      console.log(data);
      return data;
    } catch (e) {
      console.log(e.message);
    }
  }
);

export const getCotegories = createAsyncThunk(
  'post/getCotegories',
  async () => {
    try {
      const { data } = await $api.get('/categories/');
      return data;
    } catch (e) {
      console.log(e.message);
    }
  }
);

export const getAllPosts = createAsyncThunk('post/getAllPosts', async () => {
  try {
    const { data } = await $api.get('/items');
    return data;
  } catch (e) {
    console.log(e.message);
  }
});

export const removePost = createAsyncThunk('post/removePost', async (id) => {
  try {
    const { data } = await $api.delete(`/posts/${id}`, id);
    return data;
  } catch (e) {
    console.log(e.message);
  }
});

export const foundSlice = createSlice({
  name: 'found',
  initialState,
  reducers: {},
  extraReducers: {
    [createPost.pending]: (state) => {
      state.laoding = true;
    },
    [createPost.fulfilled]: (state, action) => {
      state.laoding = false;
      state.posts.push(action.payload);
    },
    [createPost.rejected]: (state) => {
      state.laoding = false;
    },
    [getAllPosts.pending]: (state) => {
      state.laoding = true;
    },
    [getAllPosts.fulfilled]: (state, action) => {
      state.laoding = false;
      state.posts = action.payload;
    },
    [getAllPosts.rejected]: (state) => {
      state.laoding = false;
    },
    [getCotegories.pending]: (state) => {
      state.laoding = true;
    },
    [getCotegories.fulfilled]: (state, action) => {
      state.laoding = false;
      state.categories = action.payload.results;
    },
    [getCotegories.rejected]: (state, action) => {
      state.laoding = false;
      state.error = action.error;
    },
    [createCategories.pending]: (state) => {
      state.laoding = true;
    },
    [createCategories.fulfilled]: (state, action) => {
      state.laoding = false;
      console.log(action);
    },
    [createCategories.rejected]: (state, action) => {
      state.laoding = false;
      state.error = action.error;
    },
    [removePost.pending]: (state) => {
      state.laoding = true;
    },
    [removePost.fulfilled]: (state, action) => {
      state.laoding = false;
      state.posts = state.posts.filter((item) => item.id !== action.payload.id);
    },
    [removePost.rejected]: (state) => {
      state.laoding = false;
    },
  },
});

export default foundSlice.reducer;
