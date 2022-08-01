import React from 'react'
import FormAdduser from '../components/FormAdduser';

function AddUser(props) {

  const {
    section,
    foor,
    room,
    name,
    jaya,
    miter,
    setSection,
    setFoor,
    setRoom,
    setName,
    setJaya,
    setMiter
  } = props

  return (
   <>
    <div className="container">
      <FormAdduser 
        section={section} 
        foor={foor} 
        room={room}
        name={name}
        jaya={jaya}
        miter={miter}
        setSection={setSection} 
        setFoor={setFoor}
        setRoom={setRoom}
        setName={setName}
        setJaya={setJaya}
        setMiter={setMiter}
      />
    </div>
   </>
  
  )
}

export default AddUser