import React from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import { Text, RestaurantCard } from '../../components';
import logo from '../../assets/logo.svg';
import photo from '../../assets/restaurante-fake.png';
import { Container, Search, Logo, Card, Title, Carousel } from './styles';

const Home = () => {
  const [value, setValue] = React.useState('');
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
      />
    </Container>
  );
};

export default Home;
