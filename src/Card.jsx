import React from 'react'
import web from "../src/image/momo.jpg"
const Card = (props)=> {
  return (
    <>
    <div className='my-5'>
<h1 className='text-center'> Our Services</h1>
    </div>
      <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">

                <div class="card" >
  <img src={props.imgsrc} class="card-img-top" alt="Card"/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">Explore new technology for making yourself skillful and get start thinking on these technology</p>
    <a href="#" class="btn btn-primary">Click for more</a>
  </div>
</div>
                    </div>
                    </div>
                </div>
    </>
  )
}
export default Card;