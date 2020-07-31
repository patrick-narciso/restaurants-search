import styled from 'styled-components';
import TextLarge from '../Large';
import TextMedium from '../Medium';

const BaseText = styled.p`
  line-height: 14px;
  font-size: 12px;
  margin-bottom: 10px;
  letter-spacing: 0.11px;
  font-family: ${({ theme: { fonts } }) => fonts.fontFamily};
  font-weight: normal;
  color: ${({ color, theme: { colors } }) => color || colors.text};
  text-transform: ${({ textStyle }) => textStyle || 'none'};

  ${({ size }) => size === 'large' && TextLarge};
  ${({ size }) => size === 'medium' && TextMedium};
`;

export default BaseText;
