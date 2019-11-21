import { createSlice } from "@reduxjs/redux-toolkit";
import { getGamesData, saveGamesData } from "../../data";

const initialState = getGamesData();

const gamesSlice = createSlice({
  name: "games",
  initialState: initialState,
  reducers: {
    ADD_GAME_TO_LIBRARY: (state, action) => {
      state.map(game => {
        if (game.id === action.payload) game.owned = true;
        return game;
      });
      saveGamesData(state);
    }
  }
});

const gamesReducer = gamesSlice.reducer;
export default gamesReducer;

export const { ADD_GAME_TO_LIBRARY } = gamesSlice.actions;
