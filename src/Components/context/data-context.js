import { createContext, useContext, useState } from "react";

const DataContext=createContext(null);

const DataProvider=({children})=>{
    const [products,setProducts]=useState([])
    return <DataContext.Provider value={{products,setProducts}}>{children}</DataContext.Provider>
}

const useData=()=>useContext(DataContext);

export {useData,DataProvider};