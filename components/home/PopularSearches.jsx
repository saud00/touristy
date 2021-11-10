import { Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import CardsPopular from './CardsPopular'

const styles = makeStyles({
    root:{
        justifyContent:"space-evenly",
        display:"flex", flexDirection:"row", flexWrap:"wrap",
    }
})

const cardDetails=[
    {
    src:"./img/home/1-Popular.jpeg",
    alt:"1",
    heading:"member benifits",
},
    {
    src:"./img/home/2-Popular.jpeg",
    alt:"2",
    heading:"Hotel lovers unite",
},
    {
    src:"./img/home/3-Popular.webp",
    alt:"3",
    heading:"flexiale cancelations",
},
    {
    src:"./img/home/4-Popular.jpeg",
    alt:"3",
    heading:"flexiale cancelations",
},
    {
    src:"./img/home/5-Popular.jpeg",
    alt:"3",
    heading:"flexiale cancelations",
},
    {
    src:"./img/home/6-Popular.jpeg",
    alt:"3",
    heading:"flexiale cancelations",
},
]

function PopularSearches() {
    const classes = styles()
    return (
        <div sx={{width:"100%"}}>
            <Typography variant="h4" textAlign="center" sx={{fontFamily:"Helvetica", fontWeight:"300", my:5}} >Popular Searched</Typography>
            <div className={classes.root} >
            {cardDetails.map((val, ind)=>{
                return(
                    <div  key={ind}>
                        <CardsPopular  src={val.src} heading={val.heading} />
                    </div>
                )
            }) }
            </div>
        </div>
    )
}

export default PopularSearches