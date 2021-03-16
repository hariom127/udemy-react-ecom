// import { render } from '@testing-library/react';
import React from 'react';

import './collection-item.styles.scss';

const collectionItem = ({id, name, imageUrl, price}) => {

    return <div className="collection-item">
        <div className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        
    </div>
       

}

export default collectionItem;