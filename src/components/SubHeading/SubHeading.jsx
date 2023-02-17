import React from 'react';
import images from '../../constants/images';
import './subheading.css'

const SubHeading = ({text}) => (
  <div className="app__subheading">
    <p>{text}</p>
    <img src={images.spoon} alt="" />
  </div>
);

export default SubHeading;
