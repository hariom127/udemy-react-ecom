import React from 'react';

import './custom-button.styles.scss';


const CustomeButton = ({children, ...otheButtonProps}) => (
    <button className="custom-button" {...otheButtonProps}>
        {children}
    </button>
)

export default CustomeButton;