import React from 'react'
import './NewLetter.css'

const NewsLetter = () => {
  return (
    <div className='news_letter'>
      <h1>Get Exclusive Offeers On your Email</h1>
      <p>Subscribe to our newletter and stay updated</p>
      <div>
        <input type='email' placeholder='Your Email' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
