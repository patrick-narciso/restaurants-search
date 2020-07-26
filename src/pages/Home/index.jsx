import React from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import { Container, Search, Logo } from './styles';

const Home = () => {
  const [value, setValue] = React.useState('');
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
      </Search>
    </Container>
  );
};

export default Home;
