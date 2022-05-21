import React from 'react';
import { useContext , useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import { v4 as uuidv4 } from 'uuid';


export default function AddUser() {
  const [name, setName] = useState( '' )
  const { addUser } = useContext(GlobalContext)
  const navigate = useNavigate();

  function submit() {
    const newUser = {id: uuidv4(),name} 
     
    navigate('/');
    addUser(newUser)
  }
  function change( e ) {

    setName(e.target.value)
  
  }




return (
  <div>
    <div className='container '>
      <div className='row d-flex align-items-center justify-content-center'>

        <div className='col-lg-6 col-md-6 col-sm-10 mt-5 '>
          <label className='mb-2' htmlFor="abc">Enter your name</label>
          <input type="text" id='abc' onChange={change} class="form-control shadow-none mb-2 " placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
          <button onClick={submit} type="button" class="btn btn-danger me-3">submit</button>
          <Link to='/' className="btn btn-primary">cancel</Link>

        </div>

      </div>

    </div>

  </div>
)
}
