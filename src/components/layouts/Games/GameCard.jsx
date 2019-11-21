import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box
} from "@material-ui/core";
import { Link } from "react-router-dom";

const GameCard = ({ game }) => {
  const { id, title, price, thumbnail } = game;
  return (
    <Link to={`/games/${id}`} style={{ textDecoration: "none" }}>
      <Card style={{ width: 320 }}>
        <CardMedia style={{ width: "100%", height: 300 }} image={thumbnail} />
        <CardContent style={{ height: 100 }}>
          <Typography variant="h5" component="h5">
            {title}
          </Typography>
          <Box mt={6} color="#25be09">
            <Typography variant="h6" component="h5" align="right">
              {price}$
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
};

export default GameCard;
