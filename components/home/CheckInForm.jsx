import React, {useState, useCallback} from 'react'
import { makeStyles } from '@mui/styles';
import { BsCalendarEventFill } from "react-icons/bs";
import { IoBedOutline } from "react-icons/io5";
import { BiSearchAlt2 } from "react-icons/bi";
import { Divider, InputBase, Paper, SvgIcon ,div, Typography} from '@mui/material';
import { Box } from '@mui/system';
import { IoIosArrowRoundForward } from "react-icons/io";
import 'react-calendar/dist/Calendar.css';
import { FiMinus, FiPlus } from "react-icons/fi";
import BasicDateRangePicker from './Calender';

const styles = makeStyles({
    container:{
        padding:"5px",alignItems:"center",
        display:"flex", flexDirection:"row", flexWrap:"noWrap"
    },
    calender:{
        position:"absolute",
        bottom:"10px"
    },
    bed:{
        width:"1/10", display:"flex", flexDirection:"row", wrap:"noWrap", alignItems:"center",
        "&:hover":{
            "& $bedIcon":{display:"none"},
            "& $minus":{display:"flex"},
        }
    },
    minus:{
        display:"none"
    },
    bedIcon:{
        display:"flex",
        height:"1.5rem"
    },
})

const dataFiled=["Where would you like to go?","Enter a hotel or destination",'Search for your perfect destination' ]

function CheckInForm() {
    var num
    const [count,setCount]= useState(1)
    const [rooms, setRooms] = useState(2)
    var [days, setDays] = useState(null)
    const [dispatcher, setDispatcher] = useState(false)
    const [field, setField] = useState('Search for your perfect destination')
    const plus=()=>{setRooms((prevRooms)=>(prevRooms+1))}
    const minus=()=>{setRooms((prevRooms)=>(prevRooms<=2? 2: prevRooms-1))}
    
    const classes = styles()

    const timeout = setTimeout(() => {
        setField(dataFiled[count])
        setCount(count >= 2? 0 : count+1)
        return()=>{clearTimeout(timeout)}
    }, 2000);
   
    return (
        <Paper className={classes.container} component="form">
            <SvgIcon sx={{ml:"1vw"}}><BiSearchAlt2/></SvgIcon>
            <InputBase sx={{ml:"1vw" ,flex:1}} placeholder={field}/>
            <Divider sx={{height:28, m:0.5}} orientation="vertical"/>

            <Box  sx={{ml:3, flex:1,position:"relative", display:"flex",flexDirection:"row", alignItems:'center' }} >
                
                <BasicDateRangePicker setDays={setDays} setDispatcher={setDispatcher}/>
            </Box>
            <Divider sx={{height:28, m:0.5}} orientation="vertical"/>

            <Box className={classes.bed}>
                <IoBedOutline className={classes.bedIcon} />
                <div className={classes.minus} onClick={plus} sx={{bgcolor:"yellow",  "&:hover":{bgcolor:"blue"},}}><FiPlus/></div>
                <Typography sx={{mx:2}}>{rooms} rooms</Typography>
                <div className={classes.minus} onClick={minus} sx={{bgcolor:"yellow", "&:hover":{bgcolor:"blue"},}}><FiMinus/></div>
            </Box>

        </Paper>
    )
}

export default CheckInForm


