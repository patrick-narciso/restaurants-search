import React from 'react';
import ReactStars from 'react-rating-stars-component';

import { Restaurant, RestaurantInfo, Content, RestaurantPhoto } from './styles';
import Text from '../Text';

const ResturantCard = ({ title, rating, address, photo, onClick }) => (
  <Restaurant onClick={onClick}>
    <RestaurantInfo>
      <Text size="large">{title}</Text>
      <ReactStars count={5} value={rating} edit={false} isHalf activeColor="#e7711c" />
      <Content size="medium">{address}</Content>
    </RestaurantInfo>
    <RestaurantPhoto src={photo} alt="foto do restaurante" />
  </Restaurant>
);

export default ResturantCard;
