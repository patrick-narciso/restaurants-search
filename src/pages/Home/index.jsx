import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import { RestaurantCard, Modal, Map, ImageCard, Loader } from '../../components';
import logo from '../../assets/logo.svg';
import { Container, Search, Logo, Title, Carousel, Wrapper } from './styles';

const Home = () => {
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);
  const { restaurants } = useSelector((state) => state.restaurants);
  const hasRestaurants = restaurants.length > 0;

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  const renderCarousel = () => {
    if (hasRestaurants) {
      return (
        <>
          <Title size="large">Na sua Área</Title>
          <Carousel {...settings}>
            {restaurants.map((restaurant) => (
              <ImageCard restaurant={restaurant} />
            ))}
          </Carousel>
        </>
      );
    }
    return <Loader />;
  };

  const renderRestaurants = () => {
    if (hasRestaurants) {
      return restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.place_id}
          restaurant={restaurant}
          onClick={() => setOpen(true)}
        />
      ));
    }
    return null;
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
          {renderCarousel()}
        </Search>
        {renderRestaurants()}
        <Modal open={open} onClose={() => setOpen(false)}>
          cliquei
        </Modal>
      </Container>
      <Map />
    </Wrapper>
  );
};

export default Home;
