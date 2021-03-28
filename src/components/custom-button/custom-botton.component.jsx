import React from 'react';

import './custom-botton.styles.scss';

const CustomButton = ({ children, ...otherProps }) => (
    <button className='custom-botton' {...otherProps}>
        { children }
    </button>
)

export default CustomButton;