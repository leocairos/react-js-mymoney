import React, { useEffect } from 'react'

import { usePost } from '../utils/rest'

const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDakg95VmIgN7S0Xer9haYL2IU3oOtj9ng'

const Login = () => {
    const [postData, signin] = usePost(url)

    useEffect(() => {
        if (Object.keys(postData.data).length > 0) {
            localStorage.setItem('token', postData.data.idToken)
        }

    }, [postData])

    const login = async () => {
        await signin({
            email: 'leocairos@rdlsc.com',
            password: 'abc1234',
            returnSecureToken: true
        })
    }

    return (
        <div>
            <h1>Login</h1>
            {JSON.stringify(postData)}
            <button onClick={login}>Login</button>
        </div>
    )
}

export default Login