import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TextField, { Input } from '@material/react-text-field/dist/index';
import MaterialIcon from '@material/react-material-icon';

import { Container, Search, Wrapper, Logo, CarroselTitle, Carousel, ModalTitle, ModalContent } from './styles';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import { Card, Restaurant, Modal, Map, Loader, Skeleton } from '../../components';

const Home = () => {

  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState(null);
  const [placeId,setPlaceId] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);
  const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter'){
      setQuery(inputValue);
    };
  };

  const handleOpenModal = (placeId) => {
    setPlaceId(placeId);
    setModalOpened(true);
  }

  const handleInputChange = (e) => setInputValue(e.target.value);

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo Restaurante" />
          <TextField
            outlined
            label="Pesquisar Restaurantes"
            trailingIcon={<MaterialIcon role="button" icon="search" />}>
            <Input 
              value={inputValue} 
              onKeyPress={handleKeyPress} 
              onChange={handleInputChange} 
            />
          </TextField>
          {restaurants.length > 0 ? (
            <>
              <CarroselTitle>Na sua Área</CarroselTitle>
              <Carousel {...settings}>
                {restaurants.map((restaurant) => (
                  <Card
                    key={restaurant.place_id}
                    photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
                    title={restaurant.name}
                  />
                ))}
              </Carousel>
            </>
          ): (
            <Loader />
          )}
          
        </Search>
        {restaurants.map((restaurant) => (
          <Restaurant
            onClick={() => handleOpenModal(restaurant.place_id)}
            restaurant={restaurant}
          />
        ))}
      </Container>
      <Map query={query} placeId={placeId} />
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
        {restaurantSelected ? (
          <>
            <ModalTitle>{restaurantSelected?.name}</ModalTitle>
            <ModalContent>{restaurantSelected?.formatted_phone_number}</ModalContent>
            <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
            <ModalContent>
              {restaurantSelected?.opening_hours?.open_now ? 'Aberto Agora.' : 'Fechado neste momento.'}
            </ModalContent>
          </>
        ) : (
          <>
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
          </>
        ) }
      </Modal>
    </Wrapper>
  );
};

export default Home;
