import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This review comes from review',
      rating: 4,
    },
    {
        id: 2,
        text: 'This review comes from review 2',
        rating: 8,
      },
      {
        id: 3,
        text: 'This review comes from review 3',
        rating: 10,
      },
  ])

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  const editFeedback = (item) => {

    setFeedbackEdit({
      item,
      edit: true
    })
  }

  const updateFeedback = (id, uptItem) => {
    setFeedback(feedback.map((item) => item.id === id ? {...item, ... uptItem} : item))


  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext