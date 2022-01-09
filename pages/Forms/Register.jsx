import { withFormik , Form , Field, ErrorMessage} from 'formik'
import React from 'react'
import { FormControl, Paper, Typography, Button, Box, useMediaQuery } from '@mui/material';
import {TextField} from 'formik-mui'
import { textAlign } from '@mui/system';
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineUser,HiOutlineMail } from "react-icons/hi";
import * as Yup from 'yup';
import { makeStyles } from '@mui/styles'; 
import { useRouter } from 'next/router'

const styles = makeStyles({
    cssOutlinedInput: {
        '&$cssFocused $notchedOutline': {
          borderColor: `white`,
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

const Login=({values, setNewUser, errors, touched, isValid, isSubmitting, dirty})=>{
    const mobile = useMediaQuery('(max-width:600px)')
    const classes = styles()
    const router = useRouter()
    return(
        <Box sx={{backgroundImage:`url(${"/img/form-bg.jpeg"})`, backgroundPosition:"center", backgroundSize:"cover", backgroundRepeat:"no-repeat", p:2 , color:"#b6a288" }}>

        <Form method='POST'>
            <Paper elevation={8} sx={{m:"5vh auto", display:"block", width:mobile?"100%": "50%", textAlign:"center", color:"white", backgroundColor:"transparent"}}>
            <FormControl sx={{color:"white"}}>

                <Box sx={{height:"5rem" , width:"5rem", backgroundColor:"transparent" , display:"block", margin:"0 auto",textAlign:"center"}}><img src="https://img.icons8.com/external-bearicons-blue-bearicons/64/000000/external-login-call-to-action-bearicons-blue-bearicons-1.png" width="100%" height="100%"/>
                </Box>
                <Typography sx={{mb:"2rem", transform:`scale(1.5,1.5)`, fontFamily:"Georgia, serif"}}> <h2> Register Member</h2> </Typography>
                    
                <Box margin={1} sx={{display:"inline-flex", alignItems:"center",background: `rgba(0, 0, 0, .2)`,}}>
                    <Box sx={{p:"1vw"}}>  <HiOutlineUser size={40}/></Box> 
                   
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
                        component={TextField} name="name" label="First Name" type="text" autoFocus/>
                </Box>
                {/* <ErrorMessage name="username" /> */}

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
                {/* <ErrorMessage name="email" /> */}
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
                        component={TextField} name="phone" label="Phone" />
                </Box>
                {/* <ErrorMessage name="email" /> */}

          {/* <div style={{color:"red"}}>{touched.password && errors.password}</div> */}
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
                        component={TextField} name="password" label="Password" color="info" type="password" />
                </Box>
                {/* <ErrorMessage name="email" /> */}

                {/* {values.cPassword != values.password && touched.cPassword && <p color="red">Please Re-enter correct Password</p> } */}
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
                        component={TextField} name="cPassword" label="Confirm Password" color="info" type="password" />
                </Box>

                <Paper elevation={8} sx={{backgroundColor:"inherit",my:"2rem"}} ><Button type="submit" sx={{backgroundColor:"#778b9f",  width:"50%", "&:hover":{color:"white"} }} disabled={isSubmitting || !isValid || !dirty} color="inherit"> Submit</Button></Paper>

                <Box><Typography>Already a User? <u onClick={()=>{setNewUser(false)}} style={{color:"#F7991C",cursor:"pointer"}}> SignIn here</u></Typography></Box>
           
            </FormControl>
            </Paper>
        </Form>
        </Box>
    )
}

const FormikApp = withFormik({
    mapPropsToValues({name, email, phone, password, cPassword}){
        return{
            name: name || "", email : email || "", password : password || "", cPassword : cPassword || "", phone:phone||""
        }
    },
    async handleSubmit(values,{props}){
        // e.preventDefault()
        const {name, email, password, phone, cPassword } = values;

        const res = await fetch('/reg', {
            method:"POST",
            headers:{
                'Content-Type':"application/json"
            },
            body: JSON.stringify({name, email, phone, password,  cPassword })
        })
        const data = await res.json()
        console.log(data)
        
        if(data.status==200){
            console.log(data.status)
            window.alert(data.message)
            props.setNewUser(false)
        }else{
            console.log(data.status)
            window.alert(data.err)
        }
        // setTimeout(() => {
        //     setSubmitting(true)
        //     // setStatus('Registered')
        // }, 1000);
    },

    validationSchema: Yup.object().shape({
        email: Yup.string().email("Enter valid Email Address").required(),
        name: Yup.string().required("Username is mandatory"),
        password: Yup.string().required("password required").min(8, "Weak Password"),
        cPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
    })
})(Login)

export default function Register({setNewUser}) {
    return <FormikApp setNewUser={setNewUser} />
}
