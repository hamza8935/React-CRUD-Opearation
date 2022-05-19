import React from 'react'
import { Link } from 'react-router-dom'

export default function UserList() {
    return (
        <div>

            <div className='container'>
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








            <div className='container'>
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

            
            <div className='container'>
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










        </div>
    )
}
