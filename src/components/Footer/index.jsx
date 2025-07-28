import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="home-footer">
        <div className="footer-logo-title">
          <img src="https://res.cloudinary.com/dsrifdfcy/image/upload/v1752118329/Group_7420_pjzzf1.png" alt="logo" className="logo" />
          <span className="title">Tasty Kitchens</span>
        </div>
        <p>The only thing we are serious about is food.<br />Contact us on</p>
        <div className="footer-social">
          <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" /></a>
          <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Pinterest" /></a>
          <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Twitter" /></a>
          <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" /></a>
        </div>
      </footer>
    </div>
  )
}

export default Footer
