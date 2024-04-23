import React, { useState } from 'react'
import { registerApi } from './Services/AllApi';
import { useNavigate } from 'react-router-dom';


function Login() {
const [user,setuser] = useState("")
const navigate = useNavigate()
console.log(user);

const handleenter = async ()=>{
    if(user){
const result = await registerApi()
console.log(result);
if(result.status==200){
    
}
navigate('/edit')
    }
    else{
        alert("Please Enter Your Username")
    }
}

  return (
    <div className='container w-100 p-5'  >
        <div>
            <div className='text-center'>
                <img height="150px" width="150px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRsQp3QfMCj9fdrpDdMhuC_UQgbwA6o6dZ25_J1Lp4lg&s" alt="" />
            </div>
            <div >
                <label htmlFor="">UserName</label> <br />
                <input value={user} onChange={e=>setuser(e.target.value)} className='form-control mt-3' type="text" placeholder='Enter Your UserNme' />
            </div>
            <div className='text-center mt-3'>
                <button onClick={handleenter} className='btn btn-primary'>Enter The Chuck Norris</button>
            </div>
        </div>

    </div>
  )
}

export default Login