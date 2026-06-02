import React, { createContext, useContext, useState } from 'react'
const create_context=createContext();
export const GlobalContext=()=>{
 return useContext(create_context);
}
const ContextApi = ({children}) => {
 const [bar,setBar]=useState(true);
const [activeIndex, setActiveIndex] = useState(1);
  return (
    <div>
      <create_context.Provider value={{bar,setBar}}>
       {children}
       </create_context.Provider>   
        </div>
  )
}

export default ContextApi
