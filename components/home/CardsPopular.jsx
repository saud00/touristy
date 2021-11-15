import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { SdCardAlert } from '@mui/icons-material';
const styled = makeStyles({
    text:{
        // width:"100%",
        position:"absolute",
        // marginLeft:"auto",
        // marginRight:"auto",
        top:"50%",
        left:"50%",
        textAlign:"center",  
        transform: "translate(-50%, -50%)"
    },
    img:{
        filter:'brightness(75%)',
        zIndex:"-4",
        transition: 'filter 1s',
        "&:hover":{
            filter:'brightness(50%)',
        }
    }
})

export default function CardsPopular(props) {
    const classes = styled()
  console.log(props.heading)
  return (
    <Card sx={{ minWidth:280, minHeight:250, maxWidth:380, maxHeight:300, position:"relative",  mb:5}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={props.src}
          alt={props.alt}
          className={classes.img}
        />
        <div className={classes.text}>
          <Typography sx={{textTransform:'uppercase', color:"white", transform:'scale(.9,.8)'}} gutterBottom variant="h6" component="div">
            {props.heading}
          </Typography>
        </div>
      </CardActionArea>
    </Card>
  );
}
