import React from 'react';
import Lottie from 'react-lottie';

import animationData from '../../assets/4762-food-carousel.json';


export default () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        },

    };

    return <Lottie options={defaultOptions} />
}