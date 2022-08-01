
import React, { useState, useEffect, useInsertionEffect } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'

import Foor from '../components/formGroup/Foor';
import Room from '../components/formGroup/Room';
import Section from '../components/formGroup/Section';


function Addmin(props) {

   const [user, setUser] = useState({})
   const {
      section,
      foor,
      room,
      name,
      miter,
      setSection,
      setFoor,
      setRoom,
      setMiter
   } = props;

   useEffect( () => {
      fetch(`http://localhost:3300/api/user/${section}/${foor}/${room}`)
      .then(res => res.json())
      .then(data => {
         setUser(data)
         setMiter(...data.miter.sort((a,b)=>b-a))
      })
   }, [room, foor, section])

   

   console.log(miter);
   const select_futeur = () => { 
      // CHECK ROOM
      if (room < 5){setRoom(room+1)}
      else {
         setRoom(1)
         
         // CHECK FOOR
         if (foor < 3){setFoor(foor+1)}
         else {
            setFoor(1)

            // CHECK SECTION 
            if (section < 2){ setSection( section+1)}
            else {setSection(1)}
         }
      }        
   }

   const push_userinput = (e) => {
      e.preventDefault(); 
      // POST API
      select_futeur()
   }

   return (
      <>
         <div className="container">
            <Form onSubmit={push_userinput}>
            <Row>
               <Section section={section} setSection={setSection} />
               <Foor foor={foor} setFoor={setFoor} />
               <Room room={room} setRoom={setRoom} />    
            </Row>
            {user.name === undefined ? 
               <h2>nouser</h2>
               : 
               <Form.Group>
                  <Form.Label>name</Form.Label>
                  <Form.Control type='text' value={user.name === '' || user.name === undefined ? 'no user': user.name} readOnly={true}  />
               </Form.Group>
            }

            { user.miter === undefined ? 
               <h2>nouser</h2>
            : 
               <Row>
                  <Form.Group as={Col} >
                     <Form.Label>ครั้งก่อน</Form.Label>
                     <Form.Control type="number" value={miter[0]}  readOnly={true} />
                  </Form.Group>

                  <Form.Group as={Col} >
                     <Form.Label>ครั้งหลัง</Form.Label>
                     <Form.Control type="number"  />
                  </Form.Group>  
               </Row>
            }
              
          

            <Form.Group className=' d-flex justify-content-end'>
               <Button className='mt-4' type="submit">
                  create
               </Button>
            </Form.Group>
            </Form>
         </div>
      </>
   )
}

export default Addmin