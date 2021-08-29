import React from 'react';

export const CloseCreateChannel = ({ setIsCreating, setIsEditing }) => (
  <svg
    width='32'
    height='32'
    viewBox='0 0 32 32'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    onClick={() => {
      if (setIsCreating) setIsCreating(false);
      if (setIsEditing) setIsEditing(false);
    }}
  >
    <path
      d='M6.10042 6.10051C0.633603 11.5673 0.633603 20.4327 6.10042 25.8995C11.5672 31.3663 20.4326 31.3663 25.8994 25.8995C31.3662 20.4327 31.3662 11.5673 25.8994 6.10051C20.4326 0.633686 11.5672 0.633685 6.10042 6.10051ZM22.3639 11.0503L17.4141 16L22.3639 20.9497L20.9497 22.364L15.9999 17.4142L11.0502 22.364L9.63596 20.9497L14.5857 16L9.63596 11.0503L11.0502 9.63604L15.9999 14.5858L20.9497 9.63604L22.3639 11.0503Z'
      fill='var(--primary-color)'
    />
  </svg>
);
