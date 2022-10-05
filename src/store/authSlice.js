import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import $api from '../utils/axios';

const initialState = {
  loading: false,
  error: null,
  user: null,
  ids: [],
  id: null,
  entities: {},
  isLoggedIn: false,
};

export const authAdapter = createEntityAdapter();
export const authSelectors = authAdapter.getSelectors((state) => state.auth);

export const signUpUser = createAsyncThunk(
  'auth/signUpUser',
  async ({ username, email, phone, password }) => {
    try {
      await $api.post('/users/register/', { username, email, phone, password });
    } catch (e) {
      return e.error.message;
    }
  }
);

export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async (params) => {
    try {
      await $api.patch('/auth/user/', params);
    } catch (e) {
      return e.error.message;
    }
  }
);

export const getUser = createAsyncThunk('auth/getUser', async (id) => {
  try {
    const { data } = await $api.get(`/users/${id}`);
    return data;
  } catch (e) {
    return e.error.message;
  }
});

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ username, email, password }) => {
    try {
      const res = await $api
        .post('/auth/login/', { username, email, password })
        .then(({ data }) => {
          window.localStorage.setItem('access_token', data.access_token);
          window.localStorage.setItem('refresh_token', data.refresh_token);
          return data;
        });
      return res;
    } catch (e) {
      window.localStorage.setItem('access_token');
      window.localStorage.setItem('refresh_token');
      return e.error.message;
    }
  }
);

export const logoutUser = createAsyncThunk('auth/logoutUser', function () {
  window.localStorage.removeItem('access_token');
  window.localStorage.removeItem('refresh_token');
});

export const setPassword = createAsyncThunk(
  'auth/setPassword',
  async ({ new_password, current_password }) => {
    try {
      await $api.post('/users/auth/users/set_password/', {
        new_password,
        current_password,
      });
    } catch (e) {
      return e.error.message;
    }
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // SIGNUP USER
    builder.addCase(signUpUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signUpUser.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(signUpUser.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
    //USER LOGIN
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.isLoggedIn = true;
      state.id = action.payload.user.pk;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isAuthenticated = false;
      state.loading = false;
      state.error = action.error.message;
    });
    // GET USER
    builder.addCase(getUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.user = null;
      state.loading = false;
      state.error = action.error.message;
    });
    //LOGOUT USER
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.loading = false;
      state.isAuthenticated = null;
      state.ids = null;
      state.entities = null;
      state.isLoggedIn = false;
    });
    // SET PASSWORD
    builder.addCase(setPassword.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(setPassword.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(setPassword.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;
    });
  },
});

export const authReducer = authSlice.reducer;
