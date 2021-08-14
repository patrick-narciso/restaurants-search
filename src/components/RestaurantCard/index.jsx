import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";

import restaurante from '../../assets/restaurante-fake.png'

import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './styles';
import Skeleton from '../Skeleton';

const RestaurantCard = ({ restaurant, onClick }) => {

    const [imageLoaded, setImageLoaded] = useState(false);

    return (
      <Restaurant onClick={onClick}>
        <RestaurantInfo>
          <Title>{restaurant.name}</Title>
          <ReactStars
            count={5}
            edit={false}
            value={restaurant.rating}
            isHalf
            activeColor="#e7711c"
          />
          <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
        </RestaurantInfo>
        <RestaurantPhoto
          imageLoaded={imageLoaded}
          src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
          alt="foto do restaurante"
          onLoad={() => setImageLoaded(true)}
        />
        {!imageLoaded && <Skeleton width="90px" height="90px"/>}
      </Restaurant>
    );

};
export default RestaurantCard