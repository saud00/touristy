import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import HotelCards from '../components/HotelCards';

export function Hotels({path}) {
    return(
        <HotelCards val={path}/>
    )
}

export const getStaticProps=async (context)=>{
    
    var {venues, venue} = await useSelector((state) => state.HotelReducers)
    return {
        props:{
            venue
        }
    }
}

export const getStaticPaths = async()=>{
    var {venues, venue} = await useSelector(state=> state.HotelReducers)

    const ids = venues.map(val=>val.id)
    const paths= venues.map(val=>({params:{id : val.toString()}}))
    return{
        paths,
        fallback: false
    }
}