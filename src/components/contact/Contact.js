import React, {useState, useRef, useContext} from 'react';
import './styles.css'
import phone from '../../assets/phone.png'
import address from '../../assets/address.png'
import email from '../../assets/email.png'
import { ThemeContext } from '../../context';
import emailjs from "emailjs-com";

const Contact = () => {

  const formRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_xq46v6f', 'template_zd7263d', formRef.current, 'user_MuWcYnQfw3U7uNbXnhrbC')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    
  }
  return (
    <div className='portfolio__contact'>
      <div className='portfolio__contact-bg'></div>
      <div className='portfolio__contact-container'>
        <div className='portfolio__contact-left'>
          <div className='portfolio__contact-left_info'>
            <h1>Let's discuss your project</h1>
            <div>
              <img src={phone} alt="phone info" /> +998 (9bir) 694-46-9yetti
            </div>
            <div>
              <img src={email} alt="email info" /> akhrrbk@gmail.com
            </div>
            <div>
              <img src={address} alt="addrress info" /> 12, Boburshox Naman sh. UZB
            </div>
          </div>
        </div>
        <div className='portfolio__contact-right'>
          <p><b>What’s your story?</b> Get in touch. Always available for freelancing if the right project comes along. me.</p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder='Name' name='user_name' />
            <input type="text" placeholder='Subject' name='user_subject' />
            <input type="text" placeholder='Email' name='user_email' />
            <textarea rows={5} placeholder='Message' name='message' />
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )

}


export default Contact;
