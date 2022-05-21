import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import { v4 as uuidv4 } from 'uuid';





let initialState = {
    users : [
        {id : uuidv4() , name : 'user one'} ,
        {id : uuidv4() , name : 'user two'} ,
        {id : uuidv4() , name : 'user three'} ,
        {id : uuidv4() , name : 'user four'} 
    ]
}
export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({children}) =>{

    const [state, dispatch] = useReducer(AppReducer, initialState) ;



function removeUser(id) {
    dispatch({
        type : 'REMOVE' ,
        payLoad : id ,
    })
        

}

function addUser(name) {
    dispatch({
        type : 'ADD_USER',
        payLoad : name
    })
}
    return(

      < GlobalContext.Provider value = {{users : state.users , removeUser , addUser}}>
      {children}
      </GlobalContext.Provider>
    )
}
