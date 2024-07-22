import { createContext, useContext, useEffect, useState } from "react";

export const AuthContest=createContext();
export const AuthProvider=({children})=>{
    const [data,setdata]=useState(()=>{
        const storedata=localStorage.getItem("data");
        return storedata ? parseInt(storedata,10) : 0;
    })
    useEffect(()=>{
        localStorage.setItem("data",data)
    },[data])
    const Increment=()=>{
        setdata((data)=>data+1);
    }
    const Decrement=()=>{
        setdata((data)=>data-1);
    }
    return(
        <AuthContest.Provider value={{Increment,Decrement,data}}>
            {children}
        </AuthContest.Provider>
    )
}
export const useAuth=()=>{
   return useContext(AuthContest)
}