import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const iconStyle = {
  fontSize: "28px",
  marginLeft: "20px",
};
function Footer() {
  return (
    <div className='footer'>
      <div className='sb__footer section__padding'>
        <div className='sb__footer-links'>
          <div className='sb__footer-links_div'>
            <h4>Suit #402,Brigade Irv center,</h4>
            <h4>Nallurhalli Road, Whitefield </h4>
            <h4>Bangalore - 560066</h4>
            <a href='https://info@kloctechnologies.com' target='_blank'>
              info@kloctechnologies.com
            </a>
            <h4>mobile : +91 09663897463</h4>
          </div>
          <div className=''>
            <div className=''>
              <img
                alt=''
                className='rating-img'
                src='https://res.cloudinary.com/dhbmdoldt/image/upload/v1688622021/WhatsApp_Image_2_y1einr.jpg'
              />
            </div>
            <h4 className='followus-container'>Follow Us</h4>
            <div className='social-media'>
              <a
                href='https://www.facebook.com/kloctechnologies'
                target='_blank'
              >
                <FaFacebook className='icon' style={iconStyle} />
              </a>
              <a href='https://www.instagram.com/klocsutra/' target='_blank'>
                <FaInstagram style={iconStyle} />
              </a>
              <a
                href='https://www.linkedin.com/company/kloc-technologies/'
                target='_blank'
              >
                <FaLinkedin style={iconStyle} />
              </a>
              <a href='https://twitter.com/klocsutra' target='_blank'>
                <FaTwitter style={iconStyle} />
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div className='sb__footer-below'>
          <div className='sb__footer-copyright'>
            <p>
              @{new Date().getFullYear()} Kloctechnologies Pvt Ltd. All right
              reserved.
            </p>
          </div>
          <div className='sb__footer-below-links'>
            <a
              href='https://kloctechnologies.com/terms-conditions'
              target='_blank'
            >
              <div>
                <p>terms & Conditions</p>
              </div>
            </a>
            <a
              href='https://kloctechnologies.com/privacy-policy'
              target='_blank'
            >
              <div>
                <p>Privacy</p>
              </div>
            </a>
            <a href='https://kloctechnologies.com/about/' target='_blank'>
              <div>
                <p>About</p>
              </div>
            </a>
            <a href='https://kloctechnologies.com/contact/' target='_blank'>
              <div>
                <p>Contact</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
