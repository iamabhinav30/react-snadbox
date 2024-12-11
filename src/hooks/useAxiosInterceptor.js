import axios from "axios";
import { useEffect } from "react";

export function useAxiosInterceptor(){
    useEffect(()=>{
        const interceptor = axios.interceptors.response.use(
            (response)=> response,
            (error)=> Promise.reject(error)
        );
        return () => axios.interceptors.response.eject(interceptor);
    },[]);
}