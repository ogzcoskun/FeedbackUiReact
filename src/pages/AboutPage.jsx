import React from 'react'
import Card from '../shared/Card'
import { Link } from 'react-router-dom'

function About() {
  return (
    <Card>
      <h1>About this app</h1>
      <p>Great project</p>
      <p>
        <Link to='/'>Back To Home</Link>
      </p>
    </Card>
  )
}

export default About
