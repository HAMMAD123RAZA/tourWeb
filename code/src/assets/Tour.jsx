import React from 'react';
import Props from './Props';

const Tour = ({ tour ,removeCard}) => {
  return (
    <>
      {tour.map((el) => (
        <Props key={el.id} {...el} removeCard={removeCard} />
      ))}
    </>
  );
};

export default Tour;
