import React from 'react';
import { makeStyles } from '@mui/styles';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Avatar, Button, Chip } from '@mui/material';
import Link from 'next/link';

const useStyles = makeStyles({
    drawer:{
        flexShrink: 0,
        zIndex:11 ,
        
    }, drawerPaper: {
        width: '50vw',
        display: "block",
        overflow: "auto",
        backgroundColor: "#19242f",
    },
    drawerCloseIcon:{
        margin:"10px 0",
        display:"flex",
        justifyContent:"flex-end",
    },
    a:{
          fontFamily:"Helvetica-Neue",
          textDecoration:"upperCase",
          fontWeight:"bold",
          fontSize:"35px",

      }
})
  

function DrawerSide(props) {
    const classes = useStyles()  
    
    function handleClose(){
        props.setOpen(false)
    }  
    return (
        <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span style={{ marginLeft: "15px", width: "35%" }}>
            <CssBaseline />
            <Drawer
              variant="persistent"
              anchor="left"
              open={open}
              className={classes.Drawer}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div className={classes.drawerCloseIcon}>
                <IconButton onClick={handleClose} style={{color:"white"}} >
                    <Chip icon={<Avatar><ChevronLeftIcon /></Avatar>}> </Chip>
                  
                </IconButton>
              </div>
              <Divider />

              <ListItem className={classes.a}>
                  <Link href="/" ><a>Home</a></Link>
              </ListItem>
              <Divider />
              <ListItem className={classes.a}>
                  <Link href="/hotels" ><a>Honeymoon</a></Link>
              </ListItem>
              <Divider />
              <ListItem className={classes.a}>
                  <Link href="/hotels" ><a>Hotel</a></Link>
              </ListItem>
              <Divider />
              <ListItem className={classes.a}>
                  <Link href="/villas" ><a>Villas</a></Link>
              </ListItem>
              <Divider />
              <ListItem className={classes.a}>
                  <Link href="/offers" ><a>Offers</a></Link>
              </ListItem>
              <Divider />
              
              <Divider />
            </Drawer>
          </span>
          {/* <span>
            <Button
              ref={allbirdsRef}
              onClick={() => {
                prevRef.current.style.backgroundColor = "inherit";
                history.push("/");
                allbirdsRef.current.style.backgroundColor = "yellow";
                prevRef.current = allbirdsRef.current;
              }}
            >
              <code> allbirds </code>
            </Button>
          </span> */}
  
          {/* <span style={{ marginRight: "19px" }}>
            <IconButton aria-label="cart" className={classes.badge}>
              <Badge badgeContent={netQuantity} color="secondary">
                <ShoppingCartIcon
                  onClick={() => {
                    setCartOn(true);
                  }}
                />
                {cartOn ? <CartInfo setCartOn={setCartOn} /> : null}
              </Badge>
            </IconButton>
          </span> */}
        </div>
      </div>
    )
}

export default DrawerSide
