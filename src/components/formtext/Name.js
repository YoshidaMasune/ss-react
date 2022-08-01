import React from 'react'
import { Form } from 'react-bootstrap' 

function Name(props) {

   const { name, setName, } = props;

   return (
      <Form.Group>
         <Form.Label>ชื่อ</Form.Label>
         <Form.Control onChange={ e => setName(e.target.value)} value={name} type='text' />
      </Form.Group>
   )
}

export default Name