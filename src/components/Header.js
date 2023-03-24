import React,{useState,useEffect} from 'react'
import Child from './Child'
import Home from './Home'
import {Form,Button,Table,Accordion,InputGroup} from 'react-bootstrap'


function Header() {
let First,Last;
const [count,setcount] = useState(0)
const [first,setfirst] = useState([])
const [last,setlast] = useState([])
const [Name,setName] = useState([{FirstValue:First,LastValue:Last}])
const [content,setcontent] = useState([])
const AddlastName = (e)=>{
    // const val = document.getElementById('LastName').value
     Last = e.target.value

}
const AddfirstName = (e)=>{
    // const val = document.getElementById('FirstName').value
   First = e.target.value

}
const AddName = (e)=>{
  // const val = document.getElementById('FirstName').value
  e.preventDefault();
  setName([...Name,{FirstValue:First,LastValue:Last}])

  setfirst((prev) =>{
   return [...prev,First]
  })
  setlast((prev) =>{
    return [...prev,Last]
   })
    document.getElementById('FirstName').value=''
   document.getElementById('LastName').value=''
   alert(Name)

  //  .then((res)=>First='',Last='')
// $.('Form.controler').value = ""
}
const clickfunction = ()=>{
document.getElementById('HelloWorld').classList.toggle('bg-danger')
}
const Addfunction = ()=>{
setcount(count+1)
}
const Minusfunction = ()=>{
    if (count != 0) {
setcount( count-1)
    }
}
useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(value => {
        console.log(value[0].id)
        setcontent(value
          .splice(0,5)
          )});
    },[])

  return (
 <>

<div  className='my-5'>
 {count==0?<h1> zero</h1> :count%2==0?<h1>positive</h1>:<h1>negative</h1>}

    <Button className='my-2' variant='success' onClick={Addfunction}>+</Button>
 <h1>Count Number {count}</h1>
 <Button className='my-2' variant='danger' onClick={Minusfunction}>-</Button>

 </div>
 <div >
 <Button id='HelloWorld' className='btn-sm'  onClick={clickfunction}>change color</Button>
</div>

 <div className='col-6 m-auto my-5'>

 <Form onSubmit={AddName}>
      <Form.Group className=" mb-3">
      <InputGroup>
        <InputGroup.Text className='col-4'>Email address</InputGroup.Text>
        <Form.Control className='col-8' onChange={AddfirstName} id='FirstName' type="text" name='FirstName' placeholder="Enter Your First Name" />
        </InputGroup>
      </Form.Group>

      <Form.Group className="mb-3">
       <InputGroup>
        <InputGroup.Text className='col-4'>Password</InputGroup.Text>
        <Form.Control className='col-8' onChange={AddlastName} id='LastName' type="text" name='LastName' placeholder="Enter Your Last Name" />
        </InputGroup>
      </Form.Group>
   
      <Button   type="submit">
        Submit
      </Button>
    </Form>

      </div>

<Child Name={Name}/>

{content.map((res)=>

<Home key={res.id} content={res} /> 
  )}

 </>
  )
}

export default Header
