import React ,{useRef , useState} from 'react'
import {  Typography, MenuItem, Menu } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { FiFilter ,FiChevronDown,FiChevronUp} from "react-icons/fi";
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { useSelector } from 'react-redux';

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
    }
})

function Hotels() {
    const classes = styles()
    const [changeSort, setChangeSort] = useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const {venue, name} = useSelector((state) => state.HotelReducers)
//   const { products } = useSelector((products) => products.ProductReducers);

    console.log(venue)

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
                    <MenuItem>1</MenuItem>
                    <MenuItem>2</MenuItem>
                    <MenuItem>3</MenuItem>
                </Menu>

            </div>
            <div>

            </div>

        </div>
    )
}

export default Hotels
