import React , {useContext} from 'react'
import { Link } from 'react-router-dom'

import {GlobalContext} from './context/GlobalState'


export default function UserList() {
    const {users , removeUser} = useContext(GlobalContext) ;
   
    return (
        <div>

{users.map((user)=>{
return(
<div className='container'>
                <div className='row d-flex align-items-center mt-2 justify-content-around'>
                    <div className='col-lg-6 col-md-6 col-sm-10 d-flex justify-content-around'>
                        <p>{user.name}</p>


                        <div>
                            <button type="button" onClick={()=>removeUser(user.id)} class="btn btn-danger me-3">Delete</button>
                            <Link to ={`/edit/${user.id}`} className="btn btn-primary">Edit</Link>
                        </div>
                    </div>

                </div>

            </div>



)




})}
            {/* <div className='container'>
                <div className='row d-flex align-items-center mt-2 justify-content-around'>
                    <div className='col-lg-6 col-md-6 col-sm-10 d-flex justify-content-around'>
                        <p>User one</p>


                        <div>
                            <button type="button" class="btn btn-danger me-3">Delete</button>
                            <Link to='/edit/1' className="btn btn-primary">Edit</Link>
                        </div>
                    </div>

                </div>

            </div>
 */}















        </div>
    )
}
