import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import GithubService from "../http/GithubService";

const initialState = {
  data: {},
  repos: [],
  isLoading: false,
  isError: false,
}

export const getUserRepos = createAsyncThunk(
  'user/getUserRepos',
  async ({username, page}) => {
    const response = await GithubService.getUserRepos(username, page);
    return response.data;
  }

)

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.data = action.payload;
    },
    resetUser: (state) => {
      state.data = {};
      state.repos = [];
      state.isError = false;
    }
  },
  extraReducers: {
    [getUserRepos.pending]: state => {
      state.isLoading = true;
    },
    [getUserRepos.fulfilled]: (state, action) => {
      state.repos = [...state.repos, ...action.payload];
      state.isLoading = false;
    }
  }
});

export const {setUserData, resetUser} = UserSlice.actions;

export default UserSlice.reducer;