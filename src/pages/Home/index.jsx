import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import { Text, RestaurantCard, Modal, Map } from '../../components';
import logo from '../../assets/logo.svg';
import { Container, Search, Logo, Card, Title, Carousel, Wrapper } from './styles';

const Home = () => {
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);
  const [lat, setLat] = useState('-22.9035');
  const [long, setLong] = useState('-43.2096');
  const { restaurants = [] } = useSelector((state) => state.restaurants);

  useEffect(() => {
    function getPosition() {
      if ('geolocation' in navigator) {
        window.navigator.geolocation.getCurrentPosition((position) => {
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
        });
      }
    }
    getPosition();
  });

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="logo da empresa" />
          <TextField
            outlined
            label="Pesquisar"
            trailingIcon={<MaterialIcon role="button" icon="search" />}>
            <Input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
          </TextField>
          <Title size="large">Na sua Área</Title>
          <Carousel {...settings}>
            {restaurants.map((restaurant) => (
              <Card photo={restaurant.photos[0].getUrl()}>
                <Text size="medium" color="#ffffff">
                  {restaurant.name}
                </Text>
              </Card>
            ))}
          </Carousel>
        </Search>
        {restaurants.length > 0 &&
          restaurants.map((restaurant) => (
            <RestaurantCard
              rating={restaurant.rating}
              title={restaurant.name}
              address={restaurant.vicinity}
              photo={restaurant.photos[0].getUrl()}
              onClick={() => setOpen(true)}
            />
          ))}
        <Modal open={open} onClose={() => setOpen(false)}>
          cliquei
        </Modal>
      </Container>
      <Map initialCenter={{ lat, lng: long }} />
    </Wrapper>
  );
};

export default Home;
