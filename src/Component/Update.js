import React, { useEffect, useState } from 'react'
import PhoneBookApi from '../API/PhoneBookApi';
import {useParams} from 'react-router-dom'
import { toast } from 'react-toastify';

function Update() {

    const[contact,setContact] = useState({
        name : '',
        mobile : ''
    })

    const handleChange = (e)=>{
        const{name,value} = e.target;
        setContact({...contact,[name]:value})

    }

    const params = useParams()

    const getContact = ()=>{
        PhoneBookApi.getById(params.id).then(res=>{
            setContact(res.data)
        }).catch(err=>toast.error(err.message)) 
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        PhoneBookApi.update(contact,params.id).then(res=>{
            toast.success("contact Updated Successfully..!")
            window.location.href = `/`;
        }).catch(err=>toast.error(err.message))
    }

    useEffect(()=>{
        getContact()
    },[])
    return (
        <div className='container'>
            <div className='row'>
                <h1 className='text-center'>Update Contact</h1>

            </div>
            <div className='row'>
                <div className='col-md-6 offset-3'>
                    <div className='card'>
                        <div className='card-body'>
                            <form action="">
                                <div className='form-group'>
                                    <label htmlFor="">Name :</label>
                                    <input type="text" name="name" id="" value={contact.name} onChange={(e)=>handleChange(e)}  className='form-control'/>

                                </div>
                                <div className='form-group'>
                                    <label htmlFor="">Mobile :</label>
                                    <input type="number" name="mobile" id="" value={contact.mobile} onChange={(e)=>handleChange(e)} className='form-control' />

                                </div>
                            </form>

                        </div>
                        <div className='card-footer'>
                            <input type="submit" name="submit" id="" className='btn btn-outline-warning' onClick={(e)=>{submitHandler(e)}} />


                        </div>

                    </div>

                </div>

            </div>
            
        </div>
    )
}

export default Update
