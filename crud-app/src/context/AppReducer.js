export default(state , action) =>{
    switch (action.type) {
      case  "REMOVE" :
          return{
              users: state.users.filter((user)=>{
                  return user.id !== action.payLoad
              })
          }
    
        default:
        return state;
    }
}