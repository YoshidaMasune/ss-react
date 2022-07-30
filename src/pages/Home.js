import React, { useEffect, useState } from 'react'
import NavbarTop from '../components/NavbarTop';
import ListUsers from '../components/ListUsers';

function Home(props) {

  const {users, setUsers} = props

  useEffect( () => {
    fetch('http://localhost:3300/api/users')
   .then(response => response.json())
   .then( data => setUsers(data))
}, []);

  console.log(users);
  return (
    <>
    <div className="container">
      <ListUsers users={users}/>
    </div>
      
    </>
  )
}

export default Home