import React from 'react';
import { SubHeading } from '../../components';
import Button from '../../components/Button';
import images from '../../constants/images';
import './Header.css';

const Header = () => (
  <div className="app__header section__padding">
    <div className="app__header-info">
      <SubHeading text='Chase the new Flavour' />
      <h2>The key to Fine dining</h2>
      <p className='para'>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
      <Button text='Explore Menu'/>
    </div>
    <div className="app__header-img">
      <img src={images.welcome} alt="" />
    </div>
  </div>
);

export default Header;
