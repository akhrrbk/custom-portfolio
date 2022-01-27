import React from 'react';
import './styles.css'
import personalbrandimage from '../../assets/me.png'

const Intro = () => {
  return (
      <div className='portfolio__intro'>
          <div className='portfolio__intro-left'>
            <div className='portfolio__intro-left_wrapper'>
              <div className='portfolio__intro-left_wrapper_logo'>
                <h2>Hi, my name is</h2>
                <h1>Axror Maxmudovich</h1>
              </div>

              <div className='portfolio__intro-left_wrapper_title'>
                <div className='portfolio__intro-left_wrapper_title_wrapper'>
                  <div>Web Developer</div>
                  <div>UI/UX Designer</div>
                  <div>Photographer</div>
                  <div>Writer</div>
                  <div>Content Creator</div>
                </div>
              </div>

              <div className='portfolio__intro-left_wrapper_description'>
                <p>I design and develop services for customers of all sizes, specilizing in creating stylish, modern websites, web services and online stores</p>
              </div>
            </div>
          </div>
          <div className='portfolio__intro-right'>
            <div className='portfolio__intro-right_bg'></div>
            <img src={personalbrandimage} alt="personal brand logo" />
          </div>
      </div>
  )
}

export default Intro;
