import React from 'react';
import  { withRouter } from 'react-router-dom'
import './menu-item.styles.scss';

const MenuItem = ({id,title, imageUrl, size, history, linkUrl, match }) => {
    return (
        // onClick={history.push(`${match.url}${linkUrl}`)}
        <div
        className={`${size} menu-item`}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
      >
             <div className="backgeound-img" style={{ backgroundImage: `url(${imageUrl})` }} />
                <div className="content">
                    <h1 className="title">{ title.toUpperCase() }</h1>
                    <span className="subtitle-title">Shop Now</span>
                </div>
            </div>
        
    )
}

export default withRouter(MenuItem);
//withRouter is a higher order component function that return us to higher order routes details like:
// -history
// -location
// -match
