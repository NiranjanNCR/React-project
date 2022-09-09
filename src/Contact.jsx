import React, { useState } from 'react'
const Contact = ()=> {
  const [data,setdata] = useState({
    fullname : '',
    phone : '',
    email:'',
    msg:''
  })

  const InputEvent = (event) =>{
    const { name,value} = event.target;

    setdata((preVal)=>{
      return {
...preVal,
[name]: value,
      };
    });
  }

  const formSubmit=(e)=>{
    e.preventDefault();
    alert(
      `My name is ${data.fullname}. My mobolile number is${data.phone}`
    )
  }
  return (
    <>
  <div className='my-5'>
    <h1 className='text-center'>Contact Us</h1>
  </div>
    <div className='container contact_div'>
       <div className='row'>
         <div className='col-md-6 col-10 mx-a'>
           
           <form onSubmit={formSubmit} className="content-center">
           <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" name='fullname' value={data.fullname}
  onChange={InputEvent}
   placeholder="Enter your name"/>
</div>
           <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">phone</label>
  <input type="number" class="form-control" id="exampleFormControlInput1" name='phone' value={data.phone}
  onChange={InputEvent}
   placeholder="Enter your phone number"/>
</div>
           <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">email Address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" name='email' value={data.email}
  onChange={InputEvent}
   placeholder="name@example.com"/>
</div>
     
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</div>
           </form>
         </div>
       </div>
    </div>
    </>
  )
}
export default Contact;