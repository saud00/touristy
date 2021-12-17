import React, {useState} from 'react'
import Signin from './Signin'
import Register from './Register'

function Index() {
    const [newUser, setNewUser] = useState(false)
    return (
        <div>
            {newUser? <Register setNewUser={setNewUser}/> : <Signin setNewUser={setNewUser} /> }
        </div>
    )
}

export default Index
