import React from 'react';

export const LightningBolt = ({ giphyState, onCommandClick }) => (
  <div onClick={onCommandClick} style={{ display: 'flex' }}>
    <svg width='8' height='16' viewBox='0 0 8 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M3.66634 0.666672H7.66634L4.99967 6H7.66634L2.66634 15.3333L3.66634 8.66667H0.333008L3.66634 0.666672Z'
        fill={giphyState ? 'var(--primary-color)' : 'black'}
        fillOpacity={giphyState ? '1' : '0.2'}
      />
    </svg>
  </div>
);
