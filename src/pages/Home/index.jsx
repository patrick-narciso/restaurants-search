import React, { useState, useEffect } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import { Text, RestaurantCard, Modal, Map } from '../../components';
import logo from '../../assets/logo.svg';
import photo from '../../assets/restaurante-fake.png';
import { Container, Search, Logo, Card, Title, Carousel, Wrapper } from './styles';

const Home = () => {
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);
  const [lat, setLat] = useState();
  const [long, setLong] = useState();

  useEffect(() => {
    function getPosition() {
      if ('geolocation' in navigator) {
        window.navigator.geolocation.getCurrentPosition(
          (position) => {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
          },
          () => {
            setLat('-22.9035');
            setLong('-43.2096');
          }
        );
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
            <Card photo={photo}>
              <Text size="medium" color="#ffffff">
                Carousel Item 1
              </Text>
            </Card>
            <Card photo={photo}>
              <Text size="medium" color="#ffffff">
                Carousel Item 2
              </Text>
            </Card>
            <Card photo={photo}>
              <Text size="medium" color="#ffffff">
                Carousel Item 3
              </Text>
            </Card>
            <Card photo={photo}>
              <Text size="medium" color="#ffffff">
                Carousel Item 4
              </Text>
            </Card>
            <Card photo={photo}>
              <Text size="medium" color="#ffffff">
                Carousel Item 4
              </Text>
            </Card>
            <Card photo={photo}>
              <Text size="medium" color="#ffffff">
                Carousel Item 4
              </Text>
            </Card>
          </Carousel>
        </Search>
        <RestaurantCard
          rating={4}
          title="Pizzaria a lenha"
          address="Rua de alguma coisa"
          opened="Aberto até as 23h"
          photo={photo}
          onClick={() => setOpen(true)}
        />
        <Modal open={open} onClose={() => setOpen(false)}>
          cliquei
        </Modal>
      </Container>
      <Map initialCenter={{ lat, lng: long }} />
    </Wrapper>
  );
};

export default Home;
