import React from 'react'
import { useParams } from 'react-router-dom'
import { Navigate, useNavigate } from 'react-router-dom'


function Post() {


    const navigate = useNavigate()
    const onClick = () => {
        navigate('/about')
    }


    const params = useParams()
    const status = 200
    if(status === 404){
        return <Navigate to='/notfound'/>
    }

    return (
    <div>
      <h1>Post {params.id}</h1>
      <p>Name: {params.name}</p>

        <button onClick={onClick}>To About Page</button>

    </div>
  )
}

export default Post
