import { Form, Button, Row } from 'react-bootstrap';
import axios from 'axios'

import Foor from './formGroup/Foor';
import Room from './formGroup/Room';
import Section from './formGroup/Section';
import Jaya from './formtext/Jaya';
import Name from './formtext/Name'


function FormAdduser(props) {
   const {
      section,foor,room,name,jaya,
      setSection,setFoor,setRoom,setName,setJaya
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

   const push_userinput = (e) => {
      e.preventDefault(); 
      
      // validate user_input
      if(name === '' || jaya === ''){
         alert("input is not validation")
      }else{  
      //----> post API <----
         select_futeur()
         axios.post('http://localhost:3300/api/users/create', {
         name: name,
         jaya: jaya,
         section: section,
         foor: foor,
         room: room,
       })
       .then(function (response) {
         console.log(response);
       })
       .catch(function (error) {
         console.log(error);
       });
         // send data to /users/create
      }

      setName('');
      setJaya('');
   }
 
   return (
         <Form onSubmit={push_userinput}>
            <Row>
               <Section section={section} setSection={setSection} />
               <Foor foor={foor} setFoor={setFoor} />
               <Room room={room} setRoom={setRoom} /> 
            </Row>
           
         <hr /> 
         <div className="container">
            <Name name={name} setName={setName} />
            <Jaya jaya={jaya} setJaya={setJaya} />

            <Form.Group className=' d-flex justify-content-end'>
               <Button className='mt-4'  type="submit">
                  create
               </Button>
            </Form.Group>
         </div>
         
      </Form>     
   )
}

export default FormAdduser