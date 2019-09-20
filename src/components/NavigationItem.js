import React from 'react';
import classNames from 'classnames';

const NavigationItem = ({ user, activate }) => {
  const itemWrapperClassName = classNames({
    'nav-item__wrapper': !user.isActive,
    'nav-item__wrapper -nav-item-active': user.isActive
  });

  return (
    <li
      onClick={() => activate(user.id)}
      className={itemWrapperClassName}
    >
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