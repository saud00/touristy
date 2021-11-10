import { makeStyles } from '@mui/styles'
import { styled } from '@mui/material/styles';
import React from 'react'
import Cards from './Cards'

const Root = styled('div')(({theme})=>({
  
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"space-evenly",
        // [theme.breakpoints.down('md')]:{
        //     display:"flex",
        //     flexDirection:"column",
        // }
    
}))

const styles = makeStyles((theme)=>({
    root:{
    },
    card:{
        width:366,
        marginTop:'2rem',
        marginLeft:"2rem",
        marginRight:"2rem"
    }
}))

const cardDetails=[
    {
    src:"./img/v-1.jpeg",
    alt:"1",
    heading:"member benifits",
    para:"why book with Traversy"
},
    {
    src:"./img/h-1.jpg",
    alt:"2",
    heading:"Hotel lovers unite",
    para:"Discover our top picks for 2021"
},
    {
    src:"./img/h-11.jpg",
    alt:"3",
    heading:"flexiale cancelations",
    para:"Change your stay at last minute"
},
]

export default function CardsSrc() {
    const classes = styles()
    return (
        <Root>
        {cardDetails.map((val,ind)=>{
                return(
                    <div className={classes.card} sx={{ 
                        // '@media screen and (max-width: 600px)':{
                        //     display:"flex", flexDirection:"column"
                        // }
                    }} key={ind} >
                    <Cards  src={val.src} alt={val.alt} heading={val.heading} para={val.para} />
                    </div>
                )
            })}
        </Root>
    )
}


