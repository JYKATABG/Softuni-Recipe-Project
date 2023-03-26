import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createContext } from "react";
import { authServiceFactory } from '../services/authService.js';


export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [userInfo, setUserInfo] = useState({});
    const navigate = useNavigate();

    const authService = authServiceFactory(userInfo.accessToken);

    const onLoginSubmit = async (loginData) => {

        try {
            const userLogin = await authService.login(loginData);

            setUserInfo(userLogin);

            navigate('/');
        } catch (error) {
            console.log(error);
        }

    }


    const onRegisterSubmit = async (registerData) => {
        const { repeatPassword, ...data } = registerData;

        if (repeatPassword !== data.password) {
            throw alert('Password miss match!');
        }

        try {
            const userRegister = await authService.register(data);

            setUserInfo(userRegister);

            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }


    const onLogout = async () => {
        await authService.logout();

        setUserInfo({});
    }

    const context = {
        onLoginSubmit,
        onLogout,
        onRegisterSubmit,
        userId: userInfo._id,
        userEmail: userInfo.email,
        token: userInfo.accessToken,
        username: userInfo.username || 'Anonymous',
        isAuthenticated: !!userInfo.accessToken,

    }

    return (
        <>
            <UserContext.Provider value={context}>
                {children}
            </UserContext.Provider>
        </>
    )
}