import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Chef.css';

const Chef = () => (
  <div className="app__chef app__bg section__padding">
    <div className="app__chef-img ">
      <img src={images.chef} alt="" />
    </div>
    <div className="app__chef-content">
      <SubHeading text="Chef's World"/>
      <h2>What we believe in</h2>
      <div className="app__chef-content_quote">
        <img src={images.quote} alt="" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit . auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
      </div>
      <div className="app__chef-content_sign">
        <p>Kevin Luo</p>
        <p>Chef & Founder</p>
        <img src={images.sign} alt="" />
      </div>
    </div>
  </div>
);

export default Chef;
