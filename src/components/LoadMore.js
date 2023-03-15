import React from 'react'

const LoadMore = ({ onClick }) => {
  return (
    <div className="load-more">
      <button className="btn load-more-btn" onClick={onClick}>Load More</button>
    </div>
  );
};

export default LoadMore
