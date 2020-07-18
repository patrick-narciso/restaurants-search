import React from 'react';
import BaseText from './Base';

const Text = ({ children, size, textStyle = 'lowercase', ...others }) => (
  <BaseText size={size} textStyle={textStyle} {...others}>
    {children}
  </BaseText>
);

export default Text;
