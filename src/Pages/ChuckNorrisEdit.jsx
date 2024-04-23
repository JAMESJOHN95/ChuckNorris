import React, { useEffect, useState } from 'react'
import { getapi } from './Services/AllApi'


function ChuckNorrisEdit() {
const [fact,setfact] = useState("")
const [user,setuser] = useState("")

const getuserdetails = async ()=>{
    const result = await getapi()
    console.log(result);
    if(result.status==200){
        setuser(result.data)
    }
}
const handlesubmit=()=>{
    if(fact){
        sessionStorage.setitem({"fact":""})
    }
}



useEffect(()=>{
    getuserdetails()
},[])



console.log(fact);
    return (
        <div className='container w-100 p-2'>
            <div className='text-primary'>
                <h3>{`Welcome  `}</h3>
            </div>
            <div>
                <textarea value={fact} onChange={e=>setfact(e.target.value)} className='form-control' type="text" placeholder='Enter any Chuck Norris Fact' />
            </div>
            <div onClick={handlesubmit} className='mt-2'><button className='btn btn-primary'>Submit</button>
            </div>

            <div className="row">
                <div className="col-lg-3 p-2 ">
                    <div style={{textAlign:"justify"}}>
                        <p>{fact}</p>
                        <div className='d-flex justify-content-between'>
                            <button className='btn btn-secondary'>edit</button>
                            <button className='btn btn-danger'>delete</button></div>
                    </div>
                </div>
                <div className="col-lg-3"></div>
                <div className="col-lg-3"></div>
                <div className="col-lg-3"></div>
            </div>


        </div>
    )
}

export default ChuckNorrisEdit