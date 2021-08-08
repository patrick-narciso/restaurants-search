import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field/dist/index';
import MaterialIcon from '@material/react-material-icon';

import { Container, Search, Wrapper, Logo, CarroselTitle, Carousel } from './styles';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import { Card, Restaurant, Modal, Map } from '../../components';

const Home = () => {

  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
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
          <CarroselTitle>Na sua Área</CarroselTitle>
          <Carousel {...settings}>
            <Card photo={restaurante} title="nome do restauante" />
            <Card photo={restaurante} title="nome do restauante" />
            <Card photo={restaurante} title="nome do restauante" />
            <Card photo={restaurante} title="nome do restauante" />            
            <Card photo={restaurante} title="nome do restauante" />            
            <Card photo={restaurante} title="nome do restauante" />            
            <Card photo={restaurante} title="nome do restauante" />            
          </Carousel>
        </Search>
        <Restaurant />
      </Container>
      <Map query={query} />
      {/*<Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />*/}
    </Wrapper>
  );
};

export default Home;
