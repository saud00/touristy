import React ,{useRef , useState} from 'react'
import {  Typography, MenuItem, Menu } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { FiFilter ,FiChevronDown,FiChevronUp} from "react-icons/fi";
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { useSelector, useDispatch } from 'react-redux';
import HotelCards from '../components/HotelCards';

const styles = makeStyles({
    root:{
        width:"90%",
        margin:"0 auto",
        display:"block"
    }, 
    sortP:{
        display:"flex", justifyContent:"flex-end", paddingtop:"1vh", paddingBottom:"1vh",width:"100%"
    },
    sort:{
        border:"1px solid silver",
        padding:".7rem",
        alignItems:'center',
        // height:"6vh",
        // width:"6vw",
        display:"flex",flexDirection:"row",flexWrap:"nowrap",
        "& $span":{marginLeft:"1vw",marginRight:"1vw"}
    },
    cards:{
        display:"block",height:"100%",
        width:"100%",
    }
})

function Hotels() {
    const dispatch = useDispatch()
    const classes = styles()
    const [changeSort, setChangeSort] = useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null);
    var {venues, venue} = useSelector((state) => state.HotelReducers)

    const changeVenues=(e)=>{
        const eId = e.target.id
        switch(eId){
            case "1": lowest()
                break;
            case "2": Asia()
                    break;
            case "3": Europe()
                break;
            default:
                venues
        }
    }

    const lowest=()=>{
        const venue1 = venues.sort(function(a, b) {
            return a.price - b.price;
        });
        dispatch({type:"LOWEST",  venue1})
    }
    const Asia=()=>{
        const venue2 = venues.filter((e)=>{return e.region == "ASIA"})
        dispatch({type:"ASIA",  venue2})
    }
    const Europe=()=>{
        const venue3 = venues.filter((e)=>{return e.region == "Europe"})
        dispatch({type:"EUROPE",  venue3})
    }

    return (
        <div className= {classes.root}>
            <div>
                <Typography align="center" variant="h3">Luxury botique Hotels</Typography>
            </div>

            <div className={classes.sortP}>
                <ClickAwayListener onClickAway={()=>{setChangeSort(false)}}>
        
                    <div className={classes.sort} onClick={(e)=>{setAnchorEl(e.currentTarget);setChangeSort(true)}} style={{color: changeSort?  "white":"#19242f", backgroundColor: changeSort?  "#19242f":"white"}} >
                        <span><FiFilter/></span>  <span> <Typography>sort</Typography></span>
                        {changeSort? <span><FiChevronUp/></span> : <span><FiChevronDown/></span> }
                    </div>

                </ClickAwayListener>
                <Menu open={changeSort} anchorEl={anchorEl}>
                    <MenuItem id="1" onClick={(e)=>{changeVenues(e)}}>Lowest Rates</MenuItem>
                    <MenuItem id="2" onClick={(e)=>{changeVenues(e)}}>Asia</MenuItem>
                    <MenuItem id="3" onClick={(e)=>{changeVenues(e)}}>Europe</MenuItem>
                </Menu>

            </div>

            <div className={classes.cards}>
                {venue.length !== 0 && venue ? venue.map((val,ind)=>{
                    return (
                    <div  key={ind}>
                        { val &&  <div><HotelCards val={val}/></div> }
                    </div>
                    )}):
                venues.map((val,ind)=>{
                    return (
                    <div  key={ind}>
                        { val &&  <div><HotelCards val={val}/></div> }
                    </div>
                    )})}
            </div>

        </div>
    )
}

export default Hotels
