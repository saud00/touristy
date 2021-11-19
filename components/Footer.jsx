import { Avatar, Chip, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import Link from 'next/link';
import Head from 'next/head'
import { useMediaQuery } from "@mui/material";
import styles from '../styles/nav.module.css'
import { FaPhoneAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";

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
        // height:"40vh",
        width:"100%",
        display:"flex", 
        justifyContent:"space-around",
        color:"silver",
    },
    heading:{
        display:"table-cell",
        textTransform:"upperCase",
        // marginTop:"2vh",
        // marginBottom:"2vh",
        listStyleType:"none",
        // transform:'scale(.9,.9)'
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
        backgroundColor: "#19242f",
        // backgroundColor: "#29242f",
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

    const [open1, setOpen1]=React.useState(mobile? true : false)
    const [open2, setOpen2]=React.useState(mobile? true : false)
    const [open3, setOpen3]=React.useState(mobile? true : false)
    const [open4, setOpen4]=React.useState(mobile? true : false)
    function openDown1(){return setOpen1(!open1)}
    function openDown2(){return setOpen2(!open2)}
    function openDown3(){return setOpen3(!open3)}
    function openDown4(){return setOpen4(!open4)}
    
    console.log(open1)
    React.useEffect(() => {
        if(mobile){
            setOpen1(false)
            setOpen2(false)
            setOpen3(false)
            setOpen4(false)
        }else{
            setOpen1(true)
            setOpen2(true)
            setOpen3(true)
            setOpen4(true)
        }
    }, [mobile])
    return (
        <div className={classes.root} data-aos="fade-up" data-aos-duration="3000">
            <Head>
                <title>Traversy Home</title>
            </Head>
            <div className={classes.call}>
               <div > <FaPhoneAlt/> </div >  &nbsp; &nbsp; &nbsp; <div > <Typography variant="body2" >Call a Smith travel specialist on <u style={{cursor:"pointer"}}>+61 3 8648 8871</u></Typography> </div >
                
            </div>
            <div className={classes.body} style={{flexDirection:mobile? "column" : "row"}}>
                <ul>
                    <div style={{display:"table", width:"100%"}} onClick={openDown1}>
                    <li className={classes.heading}><h4>About us</h4></li>
                    <span style={{display:mobile? "table-cell":"none", textAlign:"end", paddingRight:"4vw"}}>
                       {!open1?  <IoIosArrowDown size="1.5em"  /> : <IoIosArrowUp size="1.5em" />} </span>
                    </div>
                    <li className={classes.list} style={{display:open1? "block": "none"}}>
                        <Link href='/'><a>Who we are</a></Link>
                    </li>
                    <li className={classes.list} style={{display:open1? "block": "none"}}>
                        <Link href='/'><a>Why book with us</a></Link>
                    </li>
                </ul>
                <ul>
                    <div style={{display:"table", width:"100%"}} onClick={openDown2}>
                    <li className={classes.heading}><h4>touristy collection</h4></li>
                    <span style={{display:mobile? "table-cell":"none", textAlign:"end", paddingRight:"4vw"}}>
                        {!open2?  <IoIosArrowDown size="1.5em"  /> : <IoIosArrowUp size="1.5em" />} </span>

                    </div>
                    <li className={classes.list} style={{display:open2? "block": "none"}}>
                        <Link href='/'><a>Beach hotels</a></Link>
                    </li>
                    <li className={classes.list} style={{display:open2? "block": "none"}}>
                        <Link href='/'><a>Spa hotels</a></Link>
                    </li>
                </ul>
                <ul>
                    <div style={{display:"table", width:"100%"}} onClick={openDown3}>
                    <li className={classes.heading}><h4>our top honeymoon countries</h4></li>
                    <span style={{display:mobile? "table-cell":"none", textAlign:"end", paddingRight:"4vw"}}>
                        {!open3?  <IoIosArrowDown size="1.5em"  /> : <IoIosArrowUp size="1.5em" />} </span>

                    </div>
                    <li className={classes.list} style={{display:open3? "block": "none"}}>
                        <Link href='/'><a>Dubai</a></Link>
                    </li>
                    <li className={classes.list} style={{display:open3? "block": "none"}}>
                        <Link href='/'><a>Maldivies</a></Link>
                    </li>
                </ul>
                <ul>
                    <div style={{display:"table", width:"100%"}} onClick={openDown4}>
                    <li className={classes.heading}><h4>top honeymoon destination</h4></li>
                    <span style={{display:mobile? "table-cell":"none", textAlign:"end", paddingRight:"4vw"}}>
                        {!open4?  <IoIosArrowDown size="1.5em"  /> : <IoIosArrowUp size="1.5em" />} </span>

                    </div>
                    <li className={classes.list} style={{display:open4? "block": "none"}}>
                        <Link href='/'><a>Bali Island</a></Link>
                    </li>
                    <li className={classes.list} style={{display:open4? "block": "none"}}>
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
                <div style={{textAlign:"center", color:"grey"}}>
                    <Typography variant="subtitle2">© 2021 Saud intelLabs Ltd – Boutique and luxury hotels and villas</Typography>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Footer
