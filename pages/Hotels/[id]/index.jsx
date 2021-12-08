import { useRouter } from 'next/dist/client/router'
import React ,{useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@mui/styles';
import { FiPlus, FiMinus } from "react-icons/fi";
import { Button, useMediaQuery, Typography, Paper } from '@mui/material';
import Steppers from '../../../components/hotel/Stepper';
import BasicDateRangePicker from '../../../components/home/Calender';

const styles=makeStyles({
  detailsLeft:{
       fontSize:"14px",  fontWeight:"300"
},
detailsRight:{
       alignText:"flex-end", color:"#19242f", fontWeight:"600"
  },
    
    booking:{
        display:"block", margin:"4vh auto", border:"1px solid white",  backgroundColor:"#1a8755", padding:10, transition:"background 0.3s ease", width:"50%",
        "&:hover":{backgroundColor:"#19b36c",  }

    }
})

function Index() {
    const mobile = useMediaQuery('(max-width : 600px)')
    const dispatch = useDispatch()
    const classes = styles()
    const state = useSelector(state => state.HotelReducers)
    const router = useRouter()
    const ids =router.query.id
    const {venues} = useSelector((state)=>state.HotelReducers)
    const filter = venues.filter(val=>val.id == ids)
    
    var [days, setDays] = useState(null)
    const [dispatcher, setDispatcher] = useState(false)
    const dis = filter.map(val=>val.discount())
    const [updateDiscount, setDiscount] = useState(Math.ceil(dis))

  useEffect(() => {
    if(days){
      dispatch({type:"DAYSTAY", payload:{days}})
      setDiscount(dis * days)
    }
  }, [dispatcher])

    return (
        <div style={{padding:15}}>
            <div style={{marginTop:"20px", marginBottom:"10px", justifyContent:"center", display:"flex"}}>
                <Steppers/>
            </div>
            {filter.map((val,ind)=>{
                return(
                    <div key={ind} style={{display:mobile? "block":"flex",flexDirection:"row", overflow:"hidden"}}>
                        <div style={{minWidth : mobile? "100%":"50%"}}>
                        <img src={`/img/hotels/${val.image}.jpeg`} height="100%" width="100%" alt="img" />
                        </div>

                        <div style={{minWidth : mobile? "100%":"50%", backgroundColor:"silver"}}>
                        <h2 style={{textAlign:"center", fontFamily:"Sans-serif", letterSpacing:".1px",transform:"scale(1.4, 1.2)", fontWeight:"bold"}}>
                            {val.name}
                        </h2>

                        <div style={{justifyContent:"center", display:"flex", width:"100%",}}>
                        <div >
                            <p style={{display:"flex",justifyContent:"space-between"}}> 
                                <span className={classes.detailsLeft}>per night: </span>  
                                <span className={classes.detailsRight} >${val.price}</span> 
                            </p>
                            <p style={{display:"flex",justifyContent:"space-between"}}> 
                                <span className={classes.detailsLeft}>Discounted Rate: </span>  
                                <span className={classes.detailsRight} style={{color:"#1a8755"}}>${val.discount()}</span> 
                            </p>
                            <p style={{display:"flex",justifyContent:"space-between"}}> 
                                <span className={classes.detailsLeft}>  Free cancelation before 24 hours</span>
                                <span className={classes.detailsRight}> </span>  
                            </p>
                        </div>
                        </div>
          
                        </div> 
                    </div>
                )
            })}

            <div className={classes.booking} style={{width:mobile? "70%":"30%"}}>
                <Typography textAlign="center" sx={{my:2}} >CONFIRM DATES</Typography> 
                <BasicDateRangePicker setDays={setDays} setDispatcher={setDispatcher}/>
            </div>

            <Paper sx={{p:.5}}>
              <div style={{marginLeft:mobile? 3:"5rem", marginRight:mobile? 3:"5rem"}}>
                <div style={{display:'flex', justifyContent:"space-between"}}>
                    <Typography fontWeight="300">No. of days to stay</Typography>
                    <Typography>{state.days}</Typography>
                </div>
                <div style={{display:'flex', justifyContent:"space-between"}}>
                    <Typography fontWeight="300" >Price per Room:</Typography>
                    <Typography>${filter.map((val)=>{return val.discount()})}</Typography>
                </div>
                <div style={{display:'flex', justifyContent:"space-between"}}>
                    <Typography fontWeight="300">Total price (inc. tax)</Typography>
                    <Typography color="#1a8755">${updateDiscount}</Typography>
                </div>
              </div>
                <div className={classes.booking}>
                    <Typography textAlign="center" color="white">CONFRIM NOW</Typography> 
                </div>
            </Paper>
        </div>
    )
}

export default Index
