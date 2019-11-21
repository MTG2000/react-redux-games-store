import React from "react";
import { Container } from "@material-ui/core";
import GamesList from "./Games/GamesList";

const StorePage = () => {
  return (
    <Container>
      <GamesList />
    </Container>
  );
};

export default StorePage;
