import { useState, useEffect } from 'react';
import React from 'react';
import LastUser from './LastUser';



function UltimoUser() {
  
const [users, setUsers] = useState([])

useEffect ( () => {
    fetch('http://localhost:3001/api/users/')
    .then(response => (response.json()))
    .then(data => {setUsers(data.users)} )
    .catch(error => console.error(error))
  }, []);

  let ultimo = [users[users.length - 1]]
 
  console.log(ultimo)
  return (


<div> 
       
         {   ultimo.map((u, i) => {    
           
           return <LastUser {...u} key={i}/>
              
                       
                
                
})} 
        
        
</div>


      )
 
  }

export default UltimoUser;
