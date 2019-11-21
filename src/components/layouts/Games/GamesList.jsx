import React from "react";
import { connect } from "react-redux";
import GameCard from "./GameCard";
import { Grid, Box } from "@material-ui/core";
import { ADD_GAME_TO_LIBRARY } from "../../../store/reducers/gamesReducer";

const GamesList = ({ games, ADD_GAME_TO_LIBRARY }) => {
  ADD_GAME_TO_LIBRARY(134);
  return (
    <Grid container justify="space-between">
      {games.map(g => (
        <Box key={g.id} mx={4} mb={5}>
          <GameCard game={g} />
        </Box>
      ))}
    </Grid>
  );
};

const mapStateToProps = state => ({
  games: state.games
});

export default connect(mapStateToProps, { ADD_GAME_TO_LIBRARY })(GamesList);
