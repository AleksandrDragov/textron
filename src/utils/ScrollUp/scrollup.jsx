import React from 'react'
import './scrollup.less';
function Scrollup() {
  const handleUp=()=>{
      window.scrollTo({
        top: 0,
        behavior:'smooth'
      })
    }
  return (
    
    <div className='scrollUp-container'>
      <button className='scrollUp-btn' onClick={handleUp}>^</button>
    </div>
  )
}

export default Scrollup
