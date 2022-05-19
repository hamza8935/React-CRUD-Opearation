import React from 'react'
import { Link } from 'react-router-dom'

export default function 
() {
  return (
    <div>

    <div className='container'>
        <div className='row d-flex justify-content-center mt-5 align-items-center'>
            <div className='col-lg-6 col-md-6 col-sm-10 d-flex justify-content-around abc1'>
                   <h4 className='aqa'>My Team</h4>
                <Link to= '/add' className='btn btn-danger'>Add User</Link>
            </div>

        </div>

    </div>


    </div>
  )
}
