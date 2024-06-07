import React from 'react'
import './Reviews.less';
import Hero from 'components/Hero/Hero';
import Icon from 'components/Icon/Icon';
import { Link } from 'react-router-dom';
function Reviews() {
  return (
    <div className='reviews-container'>
      <Hero PageTitle='Reviews' />
      <div className="reviews-content-container">
        <p className="reviews-pre-title">
            You can leave your review here <Link to={''} className='reviews-preTitle-link'>google reviews</Link>! We appreciate that
        </p>
        <h1 className="reviews-content-title">
            Reviews from <br /> <span className="reviews-google-logo" ><Icon id='google-logo' width={150} height={100}/> </span> 
        </h1>
      </div>
    </div>
  )
}

export default Reviews
