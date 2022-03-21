import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className="cards">
        <h1>Check out these working area</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem src={process.env.PUBLIC_URL + '/images/18Districts.png'} text="District Council" label="Districts" path="/about"/>
                    <CardItem src={process.env.PUBLIC_URL + '/images/legco.png'} text="Legislative Council" label="Legco" path="/about"/>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards