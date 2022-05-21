import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'





let initialState = {
    users : [
        {id : 1 , name : 'user one'} ,
        {id : 2 , name : 'user two'} ,
        {id : 3 , name : 'user three'} ,
        {id : 4 , name : 'user four'} 
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
