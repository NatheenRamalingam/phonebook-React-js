import axios from 'axios';

const axiosInstance = axios.create({
    baseURL :  "http://localhost:4000"
})

const PhoneBookApi = {

    getAll : ()=> {
        return axiosInstance.request({
            url : `/phonebook`,
            method : 'GET'
    
    })
},

    getById : (id)=> {
        return axiosInstance.request({
            url : `/phonebook/${id}`,
            method : "GET"
        })
    },

    create : (contact)=>{
        return axiosInstance.request({
            url : `/phonebook`,
            method : "POST",
            data : contact

        })
    },

    update : (contact,id)=>{
        return axiosInstance.request({
            url : `/phonebook/${id}`,
            method : "PUT",
            data : contact
        })
    },

    delete : (id)=>{
        return axiosInstance.request({
            url : `/phonebook/${id}`,
            method : "DELETE"
        })
    }

}

export default PhoneBookApi;
