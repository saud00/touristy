import React,{useState} from 'react'
import Link from 'next/link'
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import { useMediaQuery, Typography } from '@mui/material';
import SvgButton from'./SvgButton'
import { height } from '@mui/system';
import { IoBedOutline } from "react-icons/io5";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useDispatch } from 'react-redux';

const styles = makeStyles({
    main:{
        width:"100%",display:"flex", flexDirection:"row", flexWrap:'nowrap',  margin:"15vh 0"
    },
    span1:{
        width:"50%", minHeight:"40vh", maxHeight:"50vh",
    },
    span2:{
        width:"50%", padding:"1rem", position:"relative", minHeight:"40vh", maxHeight:"50vh",
    },
    rightEnd:{
        display:"flex",flexDirection:"row",justifyContent:"flex-end", marginBottom:"0vh"
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

const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      '& .MuiImageBackdrop-root': {
        opacity: 0.15,
      },
      '& .MuiImageMarked-root': {
        opacity: 0,
      },
      '& .MuiTypography-root': {
        border: '4px solid currentColor',
      },
    },
  }));
  
  const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  });
  
  const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  }));
  
  const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  }));
  
  const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  }));

function HotelCards({val}) {
    const {price, id} = val;
    const discount = val.discount()
    const dispatch = useDispatch()
    const [count,setCount]= useState(1)
    const [rooms, setRooms] = useState(2)

    const plus=()=>{
        setRooms((prevRooms)=>(prevRooms+1));
        dispatch({
            type:"INC",
            payload:{rooms, discount}
        });
    }
    const minus=()=>{setRooms((prevRooms)=>(prevRooms<=2? 2: prevRooms-1))}

    const mobile = useMediaQuery('(max-width:600px)')
    const classes = styles()
    return (
        <div className={classes.main} style={{display:mobile? "block":"flex"}}>
            <div className={classes.span1} style={{width:mobile? "100%":"50%"}}>
                <div style={{height:"100%", width:"100%"}}>
                    
          <Link href='Hotels/[id]' as={`/Hotels/${val.id}`}>
            <ImageButton focusRipple style={{width: '100%', height:"100%"}}>
              <a>
                <img src={`/img/hotels/${val.image}.jpeg`} height="100%" width="100%" alt="img" />
              </a>
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              View
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
          </Link>
                </div>
            </div>
            <div className={classes.span2} style={{width:mobile? "100%":"50%"}}>
                <div style={{color:"grey", letterSpacing:"0.2rem"}}>{val.location}</div>
                <div>{val.name}</div>
                <div style={{margin:"1rem 0"}}>Region: &nbsp;&nbsp;&nbsp;&nbsp; {val.region}
                </div>

                <div style={{position:"absolute",bottom:"0vh", right:"1vw"}}>

                <Box className={classes.bed}>
                <IoBedOutline className={classes.bedIcon} />
                <div className={classes.minus} onClick={plus} sx={{bgcolor:"yellow",  "&:hover":{bgcolor:"blue"},}}><FiPlus/></div>
                <Typography sx={{mx:2}}>{rooms} rooms</Typography>
                <div className={classes.minus} onClick={minus} sx={{bgcolor:"yellow", "&:hover":{bgcolor:"blue"},}}><FiMinus/></div>
            </Box>

                <div className={classes.rightEnd}>
                    <Typography>Price: &nbsp;&nbsp;&nbsp;&nbsp;</Typography>
                    <Typography color="silver" style={{textDecoration:"line-through",}}>${val.price}</Typography>
                </div>
                <div className={classes.rightEnd}>
                    <Typography>Discounted Price: &nbsp;&nbsp;&nbsp;&nbsp;</Typography>
                    <Typography>${val.discount()}</Typography>
                </div>
                <div className={classes.rightEnd}>
                  <Link href="Hotels/[id]" as={`Hotels/${id}`} ><a><SvgButton variant="contained">Visit</SvgButton></a></Link>
                    
                </div>
                </div>

            </div>
        </div>
    )
}

export default HotelCards