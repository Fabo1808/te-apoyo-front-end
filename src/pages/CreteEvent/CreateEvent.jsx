import React,{ useState, useContext}from 'react'
import { useHistory } from 'react-router'
import { Context } from '../../store/appContext'

const CreateEvent = () => {
    const {store,actions} = useContext(Context)
    const [activityName,setActivityName]= useState('')
    const [quota,setQuota]= useState('')
    const [image,setImage]= useState('')
    const [description,setDescription]= useState('')
    const [date,setDate]= useState('')
    const history= useHistory()

    const uploadImage= async (files)=>{
        
        const data = new FormData() 
        data.append('file',files[0])
        data.append('upload_preset','teapoyo-img')

        const query = await fetch(store.url_cloudinary , {
            method: "POST",
            body:data
        });
       
        let response= await query.json()
        if(query.ok){
            setImage(response.secure_url)
        }
            
     
    }

    const handleClick= async ()=>{
        const activityRegister={
            activity_name:activityName,
            image:image,
            description:description,
            date:date,
            quota:quota,
            ong_id:store.id
        }
        const query = await fetch(`${store.url_api}/activity` , {
           method: "POST",
           headers: {
               "content-type": "application/json"
           },
           body:JSON.stringify(activityRegister)
       });
      
       let response= await query.json()
       if(response.message===false){
           alert("Algo ocurrió, puedes intentar de nuevo")
       }else{
           actions.getONG()
           actions.getActivities()
           history.push(`/profile/${store.id}`);

       }

     
   }




    
    return (
        <div container  w-50 > 
        <input 
            type="text" 
            placeholder='Nombre del evento' 
            onChange={(e)=>setActivityName(e.target.value)}
            value= {activityName}
        />
        <input 
            type="text" 
            placeholder='cupos'
            onChange={(e)=>setQuota(e.target.value)}
            value= {quota} 
        />
        <input 
            type="file" 
            placeholder='imagen publicitaria del evento'
            onChange={e => uploadImage(e.target.files)}
            
            
        />
        <input 
            type="textarea" 
            placeholder='description del evento'
            onChange={(e)=>setDescription(e.target.value)}
            value= {description}
        />
        <input 
            type="text" 
            placeholder='fecha de evento'
            onChange={(e)=>setDate(e.target.value)}
            value= {date}
        />

        <button onClick={handleClick}>
            crear Evento
        </button>
          


        </div>
    )
}

export default CreateEvent
