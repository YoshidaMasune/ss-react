import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

function ListUserItem(props) {
   const { user, miter } = props
   const hero = 6;
   const Miter = miter.sort((a,b) => b-a)
   const price = Miter.length === 1 ? 0: miter[0] - miter[1]

   return (
      <>
         <td>1</td> 
         <td>{user.name}</td>
         <td>
            {
               price === 0 ? 0: (price*hero) + 20
            }
         </td>
         
         <td className='d-flex justify-content-center'>
            <Button className="btn-sm" >
               รายละเอียด
            </Button>
         </td>
      </>
   )
}

export default ListUserItem