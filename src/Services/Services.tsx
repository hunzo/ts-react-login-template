import { Model } from "../Models/Model"

const sessionLogin = (email: string) => {
    
    let payload: Model = {
        token: `fake token: generate @${new Date()}`,
        email: email,
        timeout: 123456,
        logintypes: 'xmlapi',
        ipaddress: '10.10.10.10'
    }
        
    localStorage.setItem('token', JSON.stringify(payload))
    return payload
}

const sessionLogout = () => {
    localStorage.clear()
}

const isLogin = (): boolean => {
    return localStorage.getItem('token') ? true : false
}

const getSessionInfo = () => {
    let user = JSON.parse(JSON.stringify(localStorage.getItem('token')))
    console.log(user)
    return user
}

export { sessionLogin, sessionLogout, isLogin, getSessionInfo }
