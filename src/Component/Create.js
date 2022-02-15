import React, { useState } from 'react'
import PhoneBookApi from '../API/PhoneBookApi';
import {toast} from 'react-toastify'

function Create() {

    const[contact,setContact] = useState({
        name : "",
        mobile : "",
       
    })
   

    const handleChange = (e)=>{
        const {name,value} = e.target
        setContact({...contact,[name]: value})

    }

    const submitHandler = (e)=>{
        e.preventDefault();
       
        PhoneBookApi.create(contact).then(res=>{
            toast.success("Contact created successfully")
            window.location.href = `/`         
            
            console.log('res data=',res.data)
           
        }).catch((err)=>{toast.error(err.message)})
    }
    const reset = ()=>{
        setContact("")
    }
    return (
        <div className='container'>
            <div className='row'>
                <h1 className='text-center'>Add Contact</h1>

            </div>

            <div className='row'>
                <div className='col-md-6 offset-3'>
                    <div className='card'>
                        <div className='card-body'>
                        <form action="" onSubmit={(e)=>{submitHandler(e)}}>
                    <div className='form-group'>
                        <label htmlFor=""> Name :</label>
                        <input type="text" name="name" id="" placeholder='Enter Name' value={contact.name} className='form-control' onChange={(e)=>{handleChange(e)}} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="">Mobile Number :</label>
                        <input type="number" name="mobile" id="" placeholder='Enter Mobile Number'value={contact.mobile} className='form-control' onChange={(e)=>{handleChange(e)}} />
                    </div><br />
                   
                    <div className='card-footer'>
                 
                        
                        <input type="submit"  className='btn btn-outline-success' />
                        <input type="reset"  className='btn btn-outline-danger float-end' onClick={reset}/>
    

                    </div>
                    


                    </form>

                        </div>

                    </div>

                </div>

            </div>

           
            
        </div>
    )
}

export default Create
