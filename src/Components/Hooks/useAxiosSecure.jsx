import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../Providers/AuthProvider';
import { useEffect } from "react";
import useAuth from './useAuth';
const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000', // Replace with your API base URL
});
const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = useAuth();


    useEffect(() => {
        axiosSecure.interceptors.request.use(
            (config) => {
                const token = localStorage.getItem('access-token');
                if (token) {
                    config.headers['Authorization'] = `Bearer ${token}`;
                }
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        axiosSecure.interceptors.response.use(
            (response) => response,

            async (error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    await logOut()
                    navigate('/login'); // Use useNavigate to navigate to the login page after logout

                }
                return Promise.reject(error);
            }

        );
    }, [logOut, navigate]);

    return [axiosSecure];
};

export default useAxiosSecure;