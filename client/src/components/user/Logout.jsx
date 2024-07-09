import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import * as authService from '../../services/authService'

export const Logout = () => {
    const redirect = useNavigate();
    const { setStateFunc } = useContext(AuthContext)

    useEffect(() => {

        authService.logout()
            .then(() => {
                setStateFunc({})
                redirect('/');
            });

    },[])

    return null;
}