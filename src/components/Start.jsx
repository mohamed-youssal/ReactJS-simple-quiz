import React from 'react'


export default function Start() {
  return (
    <div className='row align-items-center'>
        <div className='col-8 mx-auto m-5 start py-3'>
          <div className='d-flex justify-content-center  h2 font-italic '>Welcome in this simple quiz</div>
          <p className='d-flex justify-content-center font-italic font-weight-bold'>this a simple quiz about some global informations</p>
          <p className='d-flex justify-content-center text-secondary font-italic font-weight-bold'>* to pass this exam successfully you have to answer correclly at least to 7 questions (70%)</p>
          <div className='d-flex justify-content-center'>
            <a className='btn btn-primary btn-sm w-25' href="/quiz">Start the quiz</a>
          </div>
        </div>
    </div>
  )
}
