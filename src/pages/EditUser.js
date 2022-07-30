import React from 'react'
import { Form, Button, Row } from 'react-bootstrap'

import Section from '../components/formGroup/Section';
import Foor from '../components/formGroup/Foor';
import Room from '../components/formGroup/Room'
import Name from '../components/formtext/Name';
import Jaya from '../components/formtext/Jaya';


function EditUser(props) {
  const {
      section,
      foor,
      room,
      name,
      jaya,
      user,
      setSection,
      setFoor,
      setRoom,
      setName,
      setJaya,
      setUser
    } = props;

  const submit_edit = (e) => {
    e.preventDefault()
  }
  return (
    <div className='container pt-3'>
      <h6 className='text-center'>เเก้ไขข้อมูล</h6>

      <Form onSubmit={submit_edit}>
        <Row>
          <Section section={section} setSection={setSection} />
          <Foor foor={foor} setFoor={setFoor} />
          <Room room={room} setRoom={setRoom} />
        </Row>

        <Row>
          <Name name={name} setName={setName} user={user} />
          <Jaya jaya={jaya} setJaya={setJaya} />
        </Row>

        <Form.Group className="d-flex justify-content-end mt-4">
          <Button type='submit' className="btn-sm">
            เเก้ไข
          </Button>
        </Form.Group>
      </Form>

    </div>
  )
}

export default EditUser