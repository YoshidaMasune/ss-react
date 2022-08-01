import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

import { Link } from 'react-router-dom'
 
function ListUserItem(props) {
   const { user, miter} = props
   const hero = 6;
   const Miter = miter.sort((a,b) => b-a)
   const price = Miter.length === 1 ? 0: miter[0] - miter[1]

   return (
      <>
         <tr>
         <td>{user.address.foor}/{user.address.room}</td> 
         <td>{user.name}</td>
         <td>
            {
               price === 0 ? 0: (price*hero) + 20
            }
         </td>
         
         <td className='d-flex justify-content-center'>
            <Button as={Link} to='detail' className="btn-sm" >
               รายละเอียด
            </Button>
         </td>
         </tr>
         
      </>
   )
}

export default ListUserItem