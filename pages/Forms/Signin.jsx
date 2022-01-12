import { withFormik , Form , Field} from 'formik'
import React from 'react'
import { FormControl, Paper, Typography, Button, Box } from '@mui/material';
import {TextField} from 'formik-mui'
import * as Yup from "yup";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineUser,HiOutlineMail } from "react-icons/hi";
import { makeStyles } from '@mui/styles'; 
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';


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



const Login=({values, errors, touched, setNewUser})=>{
    const classes = styles()
    console.log(errors)
    return(
        <Box sx={{backgroundImage:`url(${"/img/form-bg.jpeg"})`, backgroundPosition:"center", backgroundSize:"cover", backgroundRepeat:"no-repeat", p:2 , color:"#b6a288" }}>

        <Form method='POST'>
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

                {errors.email && touched.emial && <Box><Typography variant="subtitle1">{errors.email}</Typography></Box>}
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
                        component={TextField} name="password" label="Password"  type="password" />
                </Box>


                <Paper elevation={8} sx={{backgroundColor:"inherit",my:"2rem"}} ><Button type="submit" sx={{backgroundColor:"#778b9f",  width:"50%", "&:hover":{color:"white"} }}  color="inherit"> Submit</Button></Paper>

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
            email : email || "", password : password || ""
        }
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().email("Enter valid Email").required("Email is required"),
        password: Yup.string().required("Password is required").min(8),
    }),
    async handleSubmit(values,{props}){
    console.log(values)
        const {email, password} = values
        const res = await fetch('/login',{
            method:"POST",
            headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify({ email, password})
        })
        const data = await res.json()
        console.log(data)

        if(data.status==200){
            props.setIsUser(true)
            window.alert(data.message)
        }else{

            window.alert(data.error)
        }
    }
})(Login)

export default function Signin({setNewUser, setIsUser}) {

    return <FormikApp setNewUser={setNewUser} setIsUser={setIsUser} />
}
