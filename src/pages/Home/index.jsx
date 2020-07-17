import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  font-family: ${({ theme }) => theme.fonts.fontFamily};
`;

const Home = () => <Div>Hello World!</Div>;

export default Home;
