import { useEffect } from 'react'
import React, { useState } from 'react'


const Posts = () => {

    const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts)
        console.log(data.posts)
      })
  }, [])

  return (
    <div className="stepper">
      {posts.map(({id, title, body}) => (
        <div key={id}>
            <br />
            <p className='active'>Post no {id}</p>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
      ))}
      <br />
    </div>
  )
}

export default Posts


