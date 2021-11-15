import { Avatar, Chip, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { FaPhoneAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Link from 'next/link';
import { useMediaQuery } from "@mui/material";
import styles from '../styles/nav.module.css'


import React from 'react'
import { height } from '@mui/system';

const styled = makeStyles({
    root:{
        display : "block",
        width: "100%",
    },
    call:{
        width:"100%",
        display:"flex", flexDirection:"row", flexWrap:"nowrap",
        backgroundColor: "#19242f",
        color:"white",  justifyContent:"center", lineHeight:"9vh", alignItems:"center"
    },
    body:{
        backgroundImage: `url(${'/img/map.png'})`,
        backgroundSize: "cover",
        height:"40vh",
        width:"100%",
        display:"flex", 
        justifyContent:"space-around",
        color:"silver",
    },
    heading:{
        textTransform:"upperCase",
        marginTop:"2vh",
        marginBottom:"2vh",
        listStyleType:"none",
        // transform:'scale(.7,.7)'
    },
    list:{
        listStyleType:"none",
        marginBottom:"1vh"

    },
    contact:{
        // in nav.module.css
        display:"flex",   height:"5vh", width:"40vw",  justifyContent:"space-evenly",
        "&:hover":{"$ $a":{ color:"white"}}
    },
    social:{
        height:"20vh",
        display:'flex', flexDirection:"column", justifyContent:"space-evenly",
       
        margin:"0px auto",
        // backgroundColor: "#19242f",
        backgroundColor: "#29242f",
        alignItems:"stretch"
    },
    calldv:{
        flexGrow:1,textAlign:"center"
    },
    socialIcon:{
        display:"flex", flexDirection:"row", flexWrap:"noWrap", justifyContent:"space-evenly", width:"100%"
    },
    zoomIcon:{
        transition:'transform 1s',
        "&:hover":{transform:'scale(1.5,1.5)'}
    }
})
function Footer() {
    const classes = styled()
    const mobile = useMediaQuery('(max-width:600px)')
    return (
        <div className={classes.root}>
            <div className={classes.call}>
               <div > <FaPhoneAlt/> </div >  &nbsp; &nbsp; &nbsp; <div > <Typography variant="body2" >Call a Smith travel specialist on <u>+61 3 8648 8871</u></Typography> </div >
                
            </div>
            <div className={classes.body}>
                <ul>
                    <li className={classes.heading}><h4>About us</h4></li>
                    <li className={classes.list}>
                        <Link href='/'><a>Who we are</a></Link>
                    </li>
                    <li className={classes.list}>
                        <Link href='/'><a>Why book with us</a></Link>
                    </li>
                </ul>
                <ul>
                    <li className={classes.heading}><h4>touristy collection</h4></li>
                    <li className={classes.list}>
                        <Link href='/'><a>Beach hotels</a></Link>
                    </li>
                    <li className={classes.list}>
                        <Link href='/'><a>Spa hotels</a></Link>
                    </li>
                </ul>
                <ul>
                    <li className={classes.heading}><h4>our top honeymoon countries</h4></li>
                    <li className={classes.list}>
                        <Link href='/'><a>Dubai</a></Link>
                    </li>
                    <li className={classes.list}>
                        <Link href='/'><a>Maldivies</a></Link>
                    </li>
                </ul>
                <ul>
                    <li className={classes.heading}><h4>top honeymoon destination</h4></li>
                    <li className={classes.list}>
                        <Link href='/'><a>Bali Island</a></Link>
                    </li>
                    <li className={classes.list}>
                        <Link href='/'><a>Rhoki beach</a></Link>
                    </li>
                </ul>
            </div>

            <div style={{width:"100%", display:"block", backgroundColor: "#19242f"}}>
                <div className={classes.social} style={{width:mobile? "80%": "40%"}}>
                    <div className={styles.contact}> 
                        <Link href="/Aboutus"><a>About us</a></Link>
                        <Link href="/Contactus"><a>Contact us</a></Link>
                    </div>
                <div className={classes.socialIcon}>
                    <span className={classes.zoomIcon}><FaTwitter size={mobile? "1em": "1.5em"} color="white"/></span>
                    <span className={classes.zoomIcon}><FaLinkedinIn size={mobile? "1em": "1.5em"} color="white"/></span>
                    <span className={classes.zoomIcon}><FaFacebookF size={mobile? "1em": "1.5em"} color="white"/></span>
                    <span className={classes.zoomIcon}><FaInstagram size={mobile? "1em": "1.5em"} color="white"/></span>

                </div>
            </div>
            </div>
        </div>
    )
}

export default Footer
