import { configureStore } from "@reduxjs/redux-toolkit";
import gamesReducer from "./reducers/gamesReducer";

const store = configureStore({
  reducer: {
    games: gamesReducer
  }
});

export default store;
