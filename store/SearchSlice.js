import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import GithubService from "../http/GithubService";

const initialState = {
  searchString: '',
  list: [],
  isLoading: false,
  isError: false,
}

export const searchUsers = createAsyncThunk(
  'search/searchUsers',
  async (username = '') => {
    const response = await GithubService.searchUsers(username);
    return response.data;
  }
)

const SearchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchString: (state, action) => {
      state.searchString = action.payload;
    },
    resetList: (state) => {
      state.list = [];
    }
  },
  extraReducers: {
    [searchUsers.pending]: (store) => {
      store.isLoading = true;
    },
    [searchUsers.fulfilled]: (store, action) => {
      store.isLoading = false;
      store.list = action.payload;
    }
  }

});

export const {setSearchString, resetList} = SearchSlice.actions;

export default SearchSlice.reducer;