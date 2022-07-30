import {configureStore} from "@reduxjs/toolkit";
import SearchSlice from "./SearchSlice";
import UserSlice from "./UserSlice";

const store = configureStore({
  reducer: {
    search: SearchSlice,
    user: UserSlice,
  }
});

export default store;