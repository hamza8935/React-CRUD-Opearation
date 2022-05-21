import AddUser from "../components/AddUser";

export default(state , action) =>{
    switch (action.type) {
      case  "REMOVE" :
          return{
              users: state.users.filter((user)=>{
                  return user.id !== action.payLoad
              })
          }
          case 'ADD_USER' :
           return{
               users :[action.payLoad ,...state.users]
           }
        default:
        return state;
    }
}