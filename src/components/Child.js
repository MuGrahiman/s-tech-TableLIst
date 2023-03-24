import React from 'react'
import "./Child.css"
import {Form,Button,Table,Accordion,InputGroup} from 'react-bootstrap'


function Child({Name}) {
    let count = 1;
  return (
  
   <>
       <Table striped bordered hover className='bg-success text-white'>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {  Name.map(name=>
      // name.splice(0,1)
        {return(
        <tr key={count}>
        <td>{count++}</td>
        <td>{name.FirstValue}</td>
        <td>{name.LastValue}</td>
        <td>{name.FirstValue} {name.LastValue}</td>
        </tr>
        )}
    )}
       
     
      </tbody>
    </Table>
    
   </>
  )
}

export default Child
