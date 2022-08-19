import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { delete_hero } from "../Redux/actions/heroActions";

const HeroCard = ({hero}) => {
  const dispatch = useDispatch();
  return (
    <Card sx={{ width: "15rem", height: "30rem" }}>
      <CardMedia
        component="img"
        height="140"
        image={hero.pictureURL}
        alt="Hero Picture"
        sx={{ height: "20rem"}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {hero.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {hero.universe}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => dispatch(delete_hero(hero.id))}>Delete</Button>
      </CardActions>
    </Card>
  );
};

export default HeroCard;
