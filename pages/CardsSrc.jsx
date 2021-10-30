import React from 'react'
import Cards from '../components/Cards'

const cardDetails=[
    {
    src:"./img/v-1.jpeg",
    alt:"1",
    heading:"member benifits",
    para:"why book with Traversy"
},
    {
    src:"./img/h-1.jpg",
    alt:"1",
    heading:"Hotel lovers unite",
    para:"Discover our top picks for 2021"
},
    {
    src:"./img/h-11.jpg",
    alt:"1",
    heading:"flexiale cancelations",
    para:"Change your stay at last minute"
},
]

function CardsSrc() {
    return (
        <div>
            {cardDetails.map((val,ind)=>{<Cards src={val.src} alt={val.alt} heading={val.heading} para={val.para} />})}
        </div>
    )
}

export default CardsSrc
