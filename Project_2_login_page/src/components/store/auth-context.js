import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => { },
    onLogin: (email, password) => { }
});

const AuthcontextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const loginInformation = localStorage.getItem("loginKey");
        if (loginInformation === '1') {
            setIsLoggedIn(true);
        }
    }, [])

    const loginHandler = (email, password) => {
        setIsLoggedIn(true);
        localStorage.setItem("loginKey", "1");
    };

    const logoutHandler = () => {
        setIsLoggedIn(false);
        localStorage.clear("loginKey");
    };

    return <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler }}> {props.children}}</AuthContext.Provider >
}

export { AuthcontextProvider };
export default AuthContext;