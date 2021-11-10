import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function CardsPopular(props) {
  console.log(props.heading)
  return (
    <Card sx={{ minWidth:250, minHeight:250, maxWidth:345, maxHeight:345, mb:5}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="345"
          image={props.src}
          alt={props.alt}
          sx={{zIndex:-2}}
        />
        <span sx={{zIndex:4}}>
          <Typography sx={{textTransform:'uppercase'}} gutterBottom variant="h6" component="div">
            {props.heading}
          </Typography>
        </span>
      </CardActionArea>
    </Card>
  );
}
