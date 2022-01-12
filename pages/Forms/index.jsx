import React, {useState} from 'react'
import Signin from './Signin'
import Register from './Register'
// import {signIn, signOut, useSession} from 'next-auth/client'
import {useDispatch} from 'react-redux'

function Index() {
    const dispatch = useDispatch()
    const [newUser, setNewUser] = useState(false)
    const [isuser, setIsUser] = useState(false)

    React.useEffect(() => {
        dispatch({type:"IS_USER", payload:{isuser}})
    }, [isuser])
    
    return (
        <div>
            {newUser? <Register setNewUser={setNewUser}/> : <Signin setNewUser={setNewUser}  setIsUser={setIsUser} /> }
        </div>
    )
}

export default Index
