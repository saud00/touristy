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
    heading:"easter escape",
},
    {
    src:"./img/home/2-Popular.jpeg",
    alt:"2",
    heading:"Hotest hotels in nsw",
},
    {
    src:"./img/home/3-Popular.webp",
    alt:"3",
    heading:"hip hideout in australia",
},
    {
    src:"./img/home/4-Popular.jpeg",
    alt:"3",
    heading:"where to stay in singapore",
},
    {
    src:"./img/home/5-Popular.jpeg",
    alt:"3",
    heading:"next-level stays in newzeland",
},
    {
    src:"./img/home/6-Popular.jpeg",
    alt:"3",
    heading:"all-star australasia",
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