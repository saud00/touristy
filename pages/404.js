import { Typography , Box, Button} from '@mui/material';
import { makeStyles } from '@mui/styles'; 
import { useRouter } from 'next/router';
// import '../styles'
const styles = makeStyles({
    root:{
        display:"block",
        margin:"10vh auto",
        position:"relative"
    },
    h1:{
        transform: 'scale(2, 2)',
        fontWeight:600,
        //  width:"50vw",
         margin:"3vh auto",
         color: 'silver',
         opacity:".3",
        },
        overlay:{
            marginTop:"5vh",
            position:'absolute',
            top:0, right:0,
            width:"100%",
            zIndex:1,
        },
        h2:{
        margin:"0 auto",
        fontWeight:"bold",
        textTransform:"uppercase",
    },
    h3:{
        margin:"2vh auto",
        textTransform:"uppercase",
        transform:"scale(.7,.7)",
    }
})

export default function Error() {
    const router = useRouter()
    const classes = styles()
        return (
        <Box sx={{diaplay:"block",margin:"5vh auto", position:"relative", height:"50vh", overflow:"hidden", textAlign:"center"}}>
            <Typography variant='h1' className={classes.h1}>404</Typography>
            <div className={classes.overlay}>
                <Typography variant='h4' textAlign='center' className={classes.h2}>We are Sorry, page not found!</Typography>
            
                <Typography variant='h6' className={classes.h3}>The page you are trying to access might be removed or temporary unavailable</Typography>
                <Button style={{borderRadius:50}} variant='outlined' onClick={()=>{router.push('/')}}> Back to Home page</Button>
            </div>
        </Box>
    )
}
