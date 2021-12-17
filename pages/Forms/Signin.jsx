import { withFormik , Form , Field} from 'formik'
import React from 'react'
import { FormControl, Paper, Typography, Button, Box } from '@mui/material';
import {TextField} from 'formik-mui'
import { textAlign } from '@mui/system';

import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineUser,HiOutlineMail } from "react-icons/hi";

import { makeStyles } from '@mui/styles'; 

const styles = makeStyles({
    cssOutlinedInput: {
        '&$cssFocused $notchedOutline': {
          borderColor: `white !important`,
        }
      },
      cssFocused: {},
      cssLabel: {
        color : 'white'
      },
    
      notchedOutline: {
        borderWidth: '1px',
        borderColor: 'white !important'
      },
})

const Login=({values, setNewUser})=>{
    const classes = styles()
    console.log('signIn')
    return(
        <Box sx={{backgroundImage:`url(${"/img/form-bg.jpeg"})`, backgroundPosition:"center", backgroundSize:"cover", backgroundRepeat:"no-repeat", p:2 , color:"#b6a288" }}>

        <Form>
            <Paper elevation={8} sx={{m:"0 auto", display:"block", width:"50%", textAlign:"center", color:"white", backgroundColor:"transparent"}}>
            <FormControl sx={{color:"white"}}>

                <Box sx={{height:"5rem" , width:"5rem", backgroundColor:"transparent" , display:"block", margin:"0 auto",textAlign:"center"}}><img src="https://img.icons8.com/external-bearicons-blue-bearicons/64/000000/external-login-call-to-action-bearicons-blue-bearicons-1.png" width="100%" height="100%"/>
                </Box>
                <Typography sx={{mb:"2rem", transform:`scale(1.5,1.5)`, fontFamily:"Georgia, serif"}}> <h2> Member Sign In</h2> </Typography>
                    

                <Box margin={1} sx={{display:"inline-flex", alignItems:"center",background: `rgba(0, 0, 0, .2)`,}}>
                        <Box sx={{p:"1vw"}}>  <HiOutlineMail size={40}/></Box> 
                   
                    <Field sx={{input: { color: 'white'} }}  InputProps={{
                        classes: {
                        root: classes.cssOutlinedInput,
                        focused: classes.cssFocused,
                        notchedOutline: classes.notchedOutline,
                        },}} InputLabelProps={{
                            classes: {
                              root: classes.cssLabel,
                              focused: classes.cssFocused,
                            },
                          }}
                          component={TextField} name="email" label="Email" type="email" />
                </Box>

                <Box margin={1} sx={{display:"inline-flex", alignItems:"center",background: `rgba(0, 0, 0, .2)`,}}>
                    <Box sx={{p:"1vw"}}>  <RiLockPasswordLine size={40}/></Box> 
                   
                    <Field sx={{input: { color: 'white'} }}  InputProps={{
                        classes: {
                        root: classes.cssOutlinedInput,
                        focused: classes.cssFocused,
                        notchedOutline: classes.notchedOutline,
                        },}} InputLabelProps={{
                            classes: {
                              root: classes.cssLabel,
                              focused: classes.cssFocused,
                            },
                          }}
                        component={TextField} name="Password" label="Password" color="info" type="password" />
                </Box>


                <Paper elevation={8} sx={{backgroundColor:"inherit",my:"2rem"}} ><Button sx={{backgroundColor:"#778b9f",  width:"50%", "&:hover":{color:"white"} }}  color="inherit"> Submit</Button></Paper>

                <Box><Typography>New User? <u onClick={()=>{setNewUser(true)}} style={{color:"#F7991C", cursor:"pointer"}}> Register here</u></Typography></Box>
           
            </FormControl>
            </Paper>
        </Form>
        </Box>
    )
}

const FormikApp = withFormik({
    mapPropsToValues({ email, password}){
        return{
            email : email || " ", password : password || " "
        }
    },
    handleSubmit(){}
})(Login)

export default function Signin({setNewUser}) {
    return <FormikApp setNewUser={setNewUser} />
}
