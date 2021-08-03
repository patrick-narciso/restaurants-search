import Slider from "react-slick";
import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
`;

export const Container = styled.aside`
    background: ${(props) => props.theme.colors.background};
    width: 360px;
    height: 100vh;
    overflow-y: auto;
`;

export const Search = styled.section`
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    justify-content: center;
    padding: 16px;
`;

export const Logo = styled.img`
    margin-bottom: 3%;
`;

export const Map = styled.div`
    background-color: red;
    width: 100%;
`;

export const Carousel = styled(Slider)`
    .slick-slide {
        margin-right: 20px;
    }
`

export const CarroselTitle = styled.h1`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size: 24px;
    font-weight: bold;
    line-height: 29px;
    margin: 16px 0;
`;
