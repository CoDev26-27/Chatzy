import React from 'react'
import './RightSidebar.css'
import assets from '../../assets/assets'
import { logout } from '../../config/firebase'
const RightSidebar = () => {
  return (
    <div className="rs">
      <div className="rs-profile">
        <img src={assets.pic_6} alt="" />
        <h3>Priya <img src={assets.green_dot} className='dot' alt="" /></h3>
        <p>Hey, i am priya using Chatzy</p>
      </div>
      <hr />
      <div className="rs-media">
        <p>Media</p>
        <div>
          <img src={assets.pic_11} alt="" />
          <img src={assets.pic_12} alt="" />
          <img src={assets.pic_13} alt="" />
          <img src={assets.pic_14} alt="" />
          <img src={assets.pic_11} alt="" />
          <img src={assets.pic_12} alt="" />
        </div>
      </div>
      <button onClick={() => logout()}>Logout</button>
    </div>
  )
}

export default RightSidebar