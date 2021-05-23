import React from 'react';

import './custom-botton.styles.scss';

const CustomButton = ({ children, inverted, ...otherProps }) => (
    <button className={`${inverted ? 'inverted' : ''}`} {...otherProps}>
        { children }
    </button>
)

export default CustomButton;