import Link from "next/link"
import Image from "next/Image"
import {useState, useEffect} from "react"
import styles from "../styles/nav.module.css"
import { FaPhoneAlt,FaBars,FaUser } from "react-icons/fa";
import Chip from '@mui/material/Chip';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import { useMediaQuery } from "@mui/material";
import DrawerSide from "./Drawer";

function Nav() {
  const mobile = useMediaQuery('(min-width:600px)')
  const [open, setOpen] = useState(false)
    const [scroll, setScroll] = useState(0)

    const handleScroll = () => {
        setScroll(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      });

    if(mobile){
    return (
          <>
          <div className={styles.nav1} >
              <div className={styles.calltext}>
                  <Chip icon={<Avatar><FaPhoneAlt/></Avatar>} style={{color:"#f7991c"}} label="+92 313 5070127" clickable/> 
              </div>
              <div style={{ alignSelf:"center"}}>
                  <Link href="/">
                  <a>
                    <Image src="/img/touristy-transparent.png" alt="logo" height={150} width={150} />
                  </a>
                  </Link>
                </div>
                <div className={styles.calltext}>
                <Link href="Forms"><a> <Chip icon={<Avatar><FaUser/></Avatar>} ></Chip> </a></Link>
                </div>
          </div>
        <div className={styles.nav}>
            <ul >
                <li style={{display: scroll>150? "flex": "none",lineHeight:0}}>
                <Link href="/">
                  <a >
                    <Image src="/img/touristy-transparent.png" alt="logo" height={70} width={70} />
                  </a>
                  </Link>
                </li>
                <li>
                    <Link href="/Hotels">Hotels</Link>
                </li>
                <li>
                    <Link href="/villas" >Villas</Link>
                </li>
                <li>
                    <Link href="/offers">Offers</Link>
                </li>
                <li style={{display: scroll>150? "inline": "none"}}>
                    <Link href="Forms"><a> <Chip icon={<Avatar><FaUser/></Avatar>} ></Chip> </a></Link>
                </li>
            </ul>
          </div>
          </>
      )

    }else{

      return(
        <>
          <div className={styles.nav}>
            <ul >
              <li >  
                <MenuIcon onClick={()=>{setOpen(true);console.log(open)}}/>
                {open ? <DrawerSide setOpen={setOpen}/> : null }
              </li>
              <li style={{lineHeight:"10px"}}>
                <Link href="/">
                  <a >
                    <Image src="/img/touristy-transparent.png" alt="logo" height={55} width={55} />
                  </a>
                  </Link>
                </li>
                <li>
                    <Link href="Forms"><a> <Chip icon={<Avatar><FaUser/></Avatar>} ></Chip> </a></Link>
                </li>
              </ul>
          </div>
        </>
      )
    }
      
}

export default Nav
