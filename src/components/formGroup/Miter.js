import React from 'react'
import { Form } from 'react-bootstrap'

function Miter(props) {

  const {miter, setMiter} = props;
  const miterPush = (e) => {
    const vall = Number(e.target.value);
    if(vall === 0){
      setMiter([])
    }else{
      setMiter([vall])
    }
    
  }
  return (
      <Form.Group>
        <Form.Label>เลข miter</Form.Label>
        <Form.Control onChange={ miterPush } value={miter} type="number" />
      </Form.Group> 
  )
}

export default Miter