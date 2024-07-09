import { useSelector } from 'react-redux'
import emailjs from '@emailjs/browser';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setalarm } from '../store/dataSlice';


const SendMsg = () => {
const dispatch = useDispatch();
 const data=useSelector(state=>state.data.personalData)
 const alarm=useSelector(state=>state.data.alarm)
 const serviceID="service_fo89aku"
 const templateID="template_7tewhdm"
 const key="8gLxNoVprB7ML5fnu"

 const template_params={
    from_name:data.fname,
    from_email:data.email,
    to_name:"Prakash Magudeeswaran",
    message:data.message
 }
 useEffect(()=>{
    if (alarm){
 emailjs.send(serviceID,templateID,template_params,key)
 .then((respone)=>console.log(respone))
 .catch((error)=>console.error(error))
 dispatch(setalarm())
}
 })

 return null
}

export default SendMsg