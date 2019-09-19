import React, { useState } from 'react';
const classNames = require('classnames');

const NavigationItem = ({ user, activate }) => {
  const [isHover, toggleHover] = useState(false);

  const itemMarginClassName = classNames({
    'nav-item__left-margin': !user.isActive,
    'nav-item__left-margin -nav-item-left-margin-active': user.isActive || isHover
  });

  const itemWrapperClassName = classNames({
    'nav-item__wrapper': !user.isActive,
    'nav-item__wrapper -nav-item-active': user.isActive || isHover
  });

  return (
    <li
      onClick={() => activate(user.id)}
      onMouseOver={() => toggleHover(true)}
      onMouseLeave={() => toggleHover(false)}
      className={itemWrapperClassName}
    >
      <div className={itemMarginClassName} />
      <img
        alt="avatar"
        src={user.avatarUrl}
        className="nav-item__avatar"
      />
      {user.name}
    </li>
  );
};

export default NavigationItem;