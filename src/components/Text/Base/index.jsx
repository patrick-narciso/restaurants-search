import styled from 'styled-components';
import TextLarge from '../Large';
import TextMedium from '../Medium';

const BaseText = styled.p`
  line-height: 14px;
  font-size: 12px;
  letter-spacing: 0.11px;
  font-family: ${({ theme: { fonts } }) => fonts.fontFamily};
  font-weight: normal;
  color: ${({ theme: { colors } }) => colors.text};
  text-transform: ${({ textStyle }) => textStyle};

  ${({ size }) => size === 'large' && TextLarge};
  ${({ size }) => size === 'medium' && TextMedium};
`;

export default BaseText;
