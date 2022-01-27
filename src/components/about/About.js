import React from 'react';
import './styles.css'
import award from '../../assets/award.png'

const About = () => {
  return (
    <div className='portfolio__about'>
      <div className="portfolio__about-left">
        <div className="portfolio__about-left_card bg"></div>
        <div className="portfolio__about-left_card">
          <img src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="about page" />
        </div>
      </div>
      <div className="portfolio__about-right">
        <div className="portfolio__about-right_container">
          <h1>About Me</h1>
          <p>It is a long established fact that a reader will be distracted by the redable content</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, veniam eligendi cupiditate officiis illum fuga doloremque nulla quaerat amet maiores, enim quod, aspernatur tempore necessitatibus illo! Saepe nostrum at accusantium.</p>
          <div className='portfolio__about-right_container_award'>
            <img src={award} alt="award" />
            <div>
              <h4>International Design Awards 2021</h4>
              <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;
