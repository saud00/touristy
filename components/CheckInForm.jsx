import React, {useState, useCallback} from 'react'
import { makeStyles } from '@mui/styles';
import { Calendar } from '@natscale/react-calendar';
// import Calendar from 'react-calendar'
import { BsCalendarEventFill } from "react-icons/bs";
import { IoBedOutline } from "react-icons/io5";
import { BiSearchAlt2 } from "react-icons/bi";
import { Divider, InputBase, Paper, SvgIcon ,div, Typography} from '@mui/material';
import { Box } from '@mui/system';
import { IoIosArrowRoundForward } from "react-icons/io";
import 'react-calendar/dist/Calendar.css';

import { FiMinus, FiPlus } from "react-icons/fi";

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
    const [open, setOpen]= useState(false)
    const [open2, setOpen2]= useState(false)
    const [field, setField] = useState('Search for your perfect destination')
    const [value, setValue] = useState(new Date());
    const [value2, setValue2] = useState(new Date());
    const onChange = (val)=>{
        setValue(val);
        const num2 = val.toString()
        num = num2.split(" ",4)
        num = num.join(" ")
        document.getElementById("q").innerText= num.toString()
    }
    const onChange2 = (val)=>{
        setValue2(val);
        const num2 = val.toString()
        num = num2.split(" ",4)
        num = num.join(" ")
        document.getElementById("q2").innerText= num.toString()
    }
    const plus=()=>{setRooms((prevRooms)=>(prevRooms+1))}
    const minus=()=>{setRooms((prevRooms)=>(prevRooms<=2? 2: prevRooms-1))}
    
    const classes = styles()
    
        if (typeof window !== "undefined") {
            document.addEventListener("click",(e)=>{
                if(e.target.id !== "q"){
                    setOpen(false)
                }if(e.target.id !== "q2"){
                    setOpen2(false)
                }
            })
        }

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
                <BsCalendarEventFill />
                <Typography id="q" onClick={()=>{setOpen(true)}} sx={{ml:2, fontWeight:"100", fontSize:"small"}}>Check In</Typography>
                {open && <Calendar id="q" value={value} onChange={onChange} returnValue="range" className={classes.calender}/>}
                <IoIosArrowRoundForward/>
                <Typography id="q2" onClick={()=>{setOpen2(true)}} sx={{ml:1, fontWeight:"100", fontSize:"small"}}>Check Out</Typography>
                {open2 && <Calendar id="q2" value={value2} onChange={onChange2} returnValue="range" className={classes.calender}/>}
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


