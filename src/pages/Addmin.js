import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'

import Foor from '../components/formGroup/Foor';
import Room from '../components/formGroup/Room';
import Section from '../components/formGroup/Section';

function Addmin(props) {
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
   } = props;

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
   
   useEffect( () => {
      fetch(`http://localhost:3300/api/users/${section}/${foor}/${room}`)
         .then(res => res.json())
         .then(data => {
            setName(data.name)
            setJaya(data.jaya)
            setMiter(data.miter)
         })
   }, [room, foor, section])

   console.log(miter)

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

            <Form.Group>
               <Form.Label>name</Form.Label>
               <Form.Control type='text' value={name === '' || name === undefined ? 'no user': name} readOnly={true}  />
            </Form.Group>

            <Row>
               <Form.Group as={Col} >
                  <Form.Label>ครั้งก่อน</Form.Label>
                  <Form.Control type="number"  readOnly={true} />
               </Form.Group>

               <Form.Group as={Col} >
                  <Form.Label>ครั้งหลัง</Form.Label>
                  <Form.Control type="number" />
               </Form.Group>
            </Row>

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