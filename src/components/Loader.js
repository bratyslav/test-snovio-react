import React, { useState } from 'react';

const Loader = () => {
  const [itemClassName, setItemClassName] = useState('');

  const timeout = setTimeout(() => {
    setItemClassName('-loaded');

    // const closetimeout = setTimeout(() => )
  }, 4200);

  return (
    <div className="loader">
      <div className={itemClassName} />
      <div className={itemClassName}>
        {
          itemClassName.length === 0
            ? ''
            : <svg width="150" height="150">
                <path id="check" d="M2, 6 l3, 2.5 l4.5, -4.5" />
              </svg>

        }
      </div>
      <div className={itemClassName} />
    </div>
  );
};

export default Loader;