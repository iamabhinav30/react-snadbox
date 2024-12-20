import { createContext, useContext } from "react";

const DepthContext = createContext(3); //default max depth is 3

export const DepthProvider = ({children, maxDepth})=>{
    return (
        <DepthContext.Provider value={maxDepth} >
        {children}
        </DepthContext.Provider>
    )
}

export const useDepth = () =>useContext( DepthContext);