import React from 'react'
import Card from '../shared/Card'
import { useState, useContext, useEffect } from 'react'
import Button from '../shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {

  const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)
  
  const [text, setText] = useState('')
  const [isDisabled, setDisabled] = useState(true)
  const [message, setMessage] = useState('')
  const [rating, setRating] = useState(0)

  useEffect(() => {
    if(feedbackEdit.edit === true){

      setDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])


  let handleTextChange = (e) => {   
    setText(e.target.value)
    if(e.target.value.length >= 10){    
        setMessage('')
        setDisabled(false)
    }else{
        setDisabled(true)
        setMessage('There must be at least 10 characters in review!!!')
    }  
    if(e.target.value === ''){
        setMessage('')
    }
  }


  const handleSubmit = (e) =>{
    e.preventDefault()

    if(text.trim().length > 10){
        const newFeedback = {
            text: text,
            rating: rating,

        }
        
        console.log(feedbackEdit.edit)

        if(feedbackEdit.edit === true){
          updateFeedback(feedbackEdit.item.id, newFeedback)
        }else{
          addFeedback(newFeedback)
        }
        
        setText('')
    }

  }


  return (
    <Card >
      <form onSubmit={handleSubmit}>
        <h2>How would you rate our service?</h2>

        <RatingSelect select = {(rating) => setRating(rating)}/>
                
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review'
            value={text}
          />
          <Button type='submit' isDisabled = {isDisabled}>Send</Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
