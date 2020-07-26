import styled from 'styled-components';

export const Container = styled.aside`
  background-color: ${({ theme: { colors } }) => colors.background};
  width: 360px;
  height: 100vh;
`;

export const Search = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  padding: 16px;
`;

export const Logo = styled.img`
  margin: 15px;
`;
