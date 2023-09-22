import React from 'react'
// import PropTypes from 'prop-types'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'


function FeedbackStats() {

    const {feedback} = useContext(FeedbackContext)

    let average = () => {

        let total = 0;
        feedback.forEach(element => {
            total += element.rating
        });

        let avarage = total / feedback.length

        if(isNaN(avarage)){
            return 0
        }

        return avarage.toFixed(1).replace(/[.,]0$/, '')
    }


  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Avarage Rating: {average()}</h4>  
    </div>
  )
}

// FeedbackStats.propTypes = {
//     feedback: PropTypes.array.isRequired
// }

export default FeedbackStats
