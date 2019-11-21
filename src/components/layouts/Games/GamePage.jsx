import React from "react";
import { connect } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Container, Grid, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  carousel: {
    "&>div": { maxHeight: 720 }
  }
});

const GamePage = props => {
  const classes = useStyles();
  const id = props.match.params.id;
  const game = props.games.filter(g => g.id === +id)[0];
  if (!game) return <h2>NOT Found</h2>;

  return (
    <Container>
      <Box mt={10} />
      <Typography variant="h4" gutterBottom component="h1" color="textPrimary">
        {game.title}
      </Typography>
      <Grid container>
        <Grid item xs={12} md={7}>
          <Carousel className={classes.carousel} showStatus={false}>
            {game.images.map((image, index) => (
              <React.Fragment key={index}>
                <img src={image} />
              </React.Fragment>
            ))}
          </Carousel>
        </Grid>
      </Grid>
    </Container>
  );
};

const mapStateToProps = state => ({
  games: state.games
});

export default connect(mapStateToProps)(GamePage);
