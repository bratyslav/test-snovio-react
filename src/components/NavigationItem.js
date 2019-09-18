import React from 'react';
const classNames = require('classnames');

const NavigationItem = ({ user, activate }) => {
  const itemMarginClassName = classNames({
    'nav-item__left-margin': !user.isActive,
    'nav-item__left-margin -nav-item-left-margin-active': user.isActive
  });

  const itemWrapperClassName = classNames({
    'nav-item__wrapper': !user.isActive,
    'nav-item__wrapper -nav-item-active': user.isActive
  });

  return (
    <li onClick={() => activate(user.id)} className={itemWrapperClassName}>
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