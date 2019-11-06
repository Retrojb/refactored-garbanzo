// import user from "../components/user"

export const isBrowser = () => typeof window !== "undefined"

export const getUser = () => isBrowser() && window.localStorage.getItem("user") 
        ? JSON.parse(window.localStorage.getItem("user")) : {}

const setUser = user => 
    window.localStorage.setItem("user", JSON.stringify(user))

export const handleLogin = ( { userName, password } ) => {
    if(userName === `John` && password === `password`) {
        console.log('200 SUCCESS')
        return setUser({
            userName: `John`,
            name: `user.govtName`,
            email: `user.email`
        })
    }
    console.log('ERROR 500')
    return false
}

export const isLoggedIn = () => {
    const user = getUser()
    return !!user.userName
}

export const logOut = callback => {
    setUser({})
    callback()
}