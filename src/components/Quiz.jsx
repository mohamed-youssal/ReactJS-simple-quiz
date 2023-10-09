import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import image from '../img/img.jpg'
import Swal from 'sweetalert2';

export default function Quiz(props) {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(59);
  const [timer, setTimer] = useState(119)
  const [minutes, setMinutes] = useState(parseInt(timer/60))



 

  const questions = [
    {
      question: 'What country has the highest life expectancy?',
      options: [
        {id: 1, text: 'usa', correct: false},
        {id: 2, text: 'brazil', correct: false},
        {id: 3, text: 'hong kong', correct:true},
      ]
    },
    {
      question: 'Which language has the more native speakers?',
      options: [
        {id: 1, text: 'englich', correct: false},
        {id: 2, text: 'spanich', correct: true},
        {id: 3, text: 'chinese', correct: false},
      ]
    },
    {
      question: 'who is the first man who traveled to the moon?',
      options: [
        {id: 1, text: 'lincoln', correct: false},
        {id: 2, text: 'tesla', correct: false},
        {id: 3, text: 'armstrong', correct:true},
      ]
    },
    {
      question: 'Who was the Ancient Greek God of the Sun?',
      options: [
        {id: 1, text: 'zeus', correct: false},
        {id: 2, text: 'athena', correct: false},
        {id: 3, text: 'apollo', correct:true},
      ]
    },
    {
      question: 'How many minutes are in a full week?',
      options: [
        {id: 1, text: '10,080', correct: true},
        {id: 2, text: '12,080', correct: false},
        {id: 3, text: '15,080', correct:false},
      ]
    },
    {
      question: 'What car manufacturer had the highest revenue in 2020?',
      options: [
        {id: 1, text: 'dacia', correct: false},
        {id: 2, text: 'volkswagen', correct: true},
        {id: 3, text: 'toyota', correct:false},
      ]
    },
    {
      question: 'What is the 4th letter of the Greek alphabet?',
      options: [
        {id: 1, text: 'alpha', correct: false},
        {id: 2, text: 'delta', correct: true},
        {id: 3, text: 'gamma', correct:false},
      ]
    },
    {
      question: 'What country has won the most World Cups?',
      options: [
        {id: 1, text: 'france', correct: false},
        {id: 2, text: 'germany', correct: false},
        {id: 3, text: 'brazil', correct:true},
      ]
    },
    {
      question: 'isac newtoon is ?',
      options: [
        {id: 1, text: 'biologist', correct: false},
        {id: 2, text: 'writer', correct: false},
        {id: 3, text: 'phisician', correct:true},
      ]
    },
    {
      question: 'how many days in a single year?',
      options: [
        {id: 1, text: '310', correct: false},
        {id: 2, text: '365', correct: true},
        {id: 3, text: '356', correct:false}
      ]
    },
    {
      question: 'you have finished your test',
      options: [
        {id: 1, text: 'submit test', correct: 'fin'}
      ]
    }
  ];

  const chose = (answer) =>{

    if(answer === 'fin'){
      props.passFunction(score);
      props.passFunction2(minutes, seconds);
      navigate('/result');
    }

    if(answer === true){
      setScore(score+1)
    }


    if(currentQuestion < questions.length){ 
      setCurrentQuestion(currentQuestion+1);
    }
  }

  

  setTimeout(() => {
    setMinutes(parseInt(timer/60))
    if (timer>0) {
      setTimer(timer-1)
        if(seconds>0){
          setSeconds(seconds-1)
        }
        else if(seconds===0){
          setSeconds(59)
        }
    } 
    else if(timer === 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'time out',
        timer: 1000
      })
      props.passFunction(score);
      props.passFunction2(minutes, seconds);
      navigate('/result')
    }
  }, 1000);

  


  return (
    <div className='row align-items-center'>
      <div className='col-lg-5 col-sm-12'>
        <img className='rounded w-100' src={image} alt="" />
      </div>
      <div className='col-lg-7 col-sm-12'>
      <div className="card bg-light">
        <div className="card-body">
          <label className='font-weight-bold'>current question : {currentQuestion+1}</label>
          <label className='float-right font-weight-bold'>timer : <label className='border border-primary rounded bg-info px-2'>{minutes} : {seconds}</label></label>
          <h5 className="card-title d-flex justify-content-center">{questions[currentQuestion].question}</h5>
        
          {questions[currentQuestion].options.map((option)=>(
            <div key={option.id}>
              <label className='d-flex justify-content-center options w-100' onClick={()=>chose(option.correct)} >{option.text}</label>
            </div>
          ))}
      </div>
      </div>
      </div>
    </div>
  )
}
