import React from 'react';
import Button from '../../components/Button';
import images from '../../constants/images';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg section__padding" id="about">
    <div className="app__aboutus-overlay">
      <img src={images.G} alt="G" />
    </div>
    <div className="app__aboutus-content">
      <div className="app__aboutus-content_about">
        <h2>About Us</h2>
        <img src={images.spoon} alt="Spoon" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <Button text="Know More" />
      </div>
      <div className="app__aboutus-content_knife">
        <img src={images.knife} alt="Knife" />
      </div>
      <div className="app__aboutus-content_history">
        <h2>Our History</h2>
        <img src={images.spoon} alt="Spoon" />
        <p>Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
        <Button text="Know More" />
      </div>
    </div>
  </div>
);

export default AboutUs;
