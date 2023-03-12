import React from 'react'
import './singlecontent.css'

const SingleContent = ({id, poster, title, date, media_type, vote_average}) => {
  return (
    <div className='singleContent'>{title}</div>
  )
}

export default SingleContent