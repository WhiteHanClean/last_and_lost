import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import $api from '../../utils/axios';

const initialState = {
  isAuthenticated: false,
  signup: false,
  loading: false,
  error: null,
  username: null,
  tel: null,
  mail: null,
  ids: [],
  entities: {},
};

export const authAdapter = createEntityAdapter();
export const authSelectors = authAdapter.getSelectors((state) => state.auth);

export const signUpUser = createAsyncThunk(
  'auth/signUpUser',
  async ({ email, password }) => {
    try {
      await $api.post('/users/auth/users/', { email, password });
    } catch (e) {
      return e.error.message;
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }) => {
    try {
      const res = await $api
        .post('/users/auth/jwt/create/', { email, password })
        .then(({ data }) => {
          localStorage.setItem('accessToken', data.access);
          localStorage.setItem('refreshToken', data.refresh);
        });
      return res;
    } catch (e) {
      localStorage.remove('accessToken');
      localStorage.remove('refreshToken');
      return e.error.message;
    }
  }
);

export const logoutUser = createAsyncThunk('auth/logoutUser', function () {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
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
      state.signup = true;
      state.error = null;
    });
    builder.addCase(signUpUser.rejected, (state, action) => {
      state.error = action.error.message;
      state.signup = false;
      state.loading = false;
    });
    //USER LOGIN
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.username = action.meta.arg.email;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isAuthenticated = false;
      state.username = null;
      state.loading = false;
      state.error = action.error.message;
    });
    //LOGOUT USER
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.loading = false;
      state.isAuthenticated = null;
      state.ids = null;
      state.entities = null;
      state.email = null;
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
