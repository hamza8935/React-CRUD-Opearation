import React from 'react'
import { Link } from 'react-router-dom'


export default function AddUser() {
  return (
    <div>
<div className='container '>
    <div className='row d-flex align-items-center justify-content-center'>

        <div className='col-lg-6 col-md-6 col-sm-10 mt-5 '>
          <label className='mb-2' htmlFor="abc">Enter your name</label>
        <input type="text" id='abc' class="form-control shadow-none mb-2 " placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
        <button type="button" class="btn btn-danger me-3">submit</button>
        <Link to='/' className="btn btn-primary">cancel</Link>
        
        </div>

    </div>

</div>
      
    </div>
  )
}
