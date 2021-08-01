import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field/dist/index';
import MaterialIcon from '@material/react-material-icon';

import { Container, Search, Wrapper, Logo, Map, CarroselTitle, Carousel } from './styled';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import { Card } from '../../components';

const Home = () => {

  const [inputValue, setInputValue] = useState('');

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true
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
            <Input value={inputValue} onChange={handleInputChange} />
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
      </Container>
      <Map />
    </Wrapper>
  );
};

export default Home;
