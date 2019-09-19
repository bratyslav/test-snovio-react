import React, { useState, useEffect } from 'react';

const Loader = ({ closeCommentInput }) => {
  const [itemClassName, setItemClassName] = useState('');

  const timeout = setTimeout(() => {
    setItemClassName('-loaded');

    const closetimeout = setTimeout(() => {
      closeCommentInput();
    }, 2000);
  }, 4200);

  useEffect(() => {
    return () => {
      clearTimeout(timeout);
    };
  });

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