import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import img1 from "../../images/Components.jpg";
import img2 from "../../images/Important.jpg";
import img3 from "../../images/Software.png";


function Cards() {
  return (
    <div className='cards'>
      <h1>My Pages</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={img1}
              text='I am going to show you the material that I need to build my fpv drone.'
              label='Components'
              path='/Components'
            />
            <CardItem
              src={img2}
              text='I explain the problems that I have met and how to solve them.'
              label='Important'
              path='/Important'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={img3}
              text='I present you Betaflight and BLHeli.'
              label='Software'
              path='/Software'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;