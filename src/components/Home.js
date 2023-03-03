import React from 'react'
import "./Home.css"
import { Container } from 'react-bootstrap'

function Home({content}) {
  // alert(content.id)
  return (
<div className='Container'>
<div  className='row bg-secondary text-white mb-2  '>
<div className='col-2 my-auto'>
  <b>{content.id}</b>
</div>
<div className='col-10  '>
<div className='row mb-1'><h1>{content.title}</h1></div>
<div className='row'>{content.body} </div>

</div>
</div>
</div>
  )}

export default Home
