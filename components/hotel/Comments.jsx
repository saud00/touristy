import { Button } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

export default function Comments() {
    const {isUser} = useSelector(state => state.HotelReducers)

    const userValid = async()=>{
        try {
            const res = await fetch('/comments',{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    'Content-type':"application/json"
                },
                credentials:"include"
            })
            const data = await res.json()
            console.log(data)
        
            if(!data.status == 200){
                console.log("user not signIn")
            }else{
                console.log('true user')
            }
        } catch (error) {
            console.log(error)
        }
    }
    React.useEffect(() => {
        userValid()
    }, [])

    return (
        <div>
        {isUser?
            <form>
                <div style={{marginTop:"3vh", display:"block"}}>
                Comments: <div style={{textAlign:"center" }} >

                    <textarea id="comment" name="comments" rows="4" cols="80"></textarea>
                </div>
                <div style={{textAlign:"center" }} >

                    <Button variant="contained" type='submit'>Submit</Button>
                </div>
                 </div>
            </form>
            :
            <div style={{color:"red", textAlign:"center", mergiinTop:"2vh"}} >"Sign In to comment"</div>
            
            }
            </div>
    )
}