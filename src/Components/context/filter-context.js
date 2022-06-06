import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../../Reducer/filter-reducer";


const FilterContext=createContext(null);

const FilterProvider=({children})=>{
    const [state,dispatch]=useReducer(filterReducer,{
        category:{mens:false,womens:false},
        sorting:"",
        brand:{TRIPR:false,AUSK:false,BLIVE:false},
        size:{s:false,m:false,l:false,xl:false},
        clearAll:null
    })
    return <FilterContext.Provider value={{state,dispatch}}>{children}</FilterContext.Provider>
}

const useFilter=()=>useContext(FilterContext);

export {useFilter,FilterProvider};