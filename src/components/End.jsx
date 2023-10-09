import React, { useEffect, useState } from 'react'

export default function End(props) {
  const [decision, setDecision] = useState('');

  useEffect(() => {
    if(props.score < 7){
      return setDecision('fail')
    }
    else if(props.score >= 7){
      return setDecision('sucess')
    }
  }, [props.score])
  
  
  return (
    <div className='row align-items-center'>
      <div className='col-10 zone mx-auto'>
        <a className='btn btn-secondary mt-2' href="/">Go back to start</a>
        <div className='d-flex h2 my-4 justify-content-center'>Your result : </div>
        <div className='col-10 mx-auto'>
              <label className='col-6 label_result text-center text-info'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-award-fill" viewBox="0 0 16 16">
                <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z"/>
                <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
              </svg>
                score: {props.score}
                </label>
              
              <label className='col-6 label_result text-center text-info'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-award-fill" viewBox="0 0 16 16">
                <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z"/>
                <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
              </svg>
              porcentage: {props.score*10}%
              </label>

              <label className='col-12 label_result text-center text-info'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-award-fill" viewBox="0 0 16 16">
                <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z"/>
                <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
              </svg>
              final decision : <label> {decision} </label>
              </label>
            </div>
      </div>

    </div>
  )
}
