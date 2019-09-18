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
    <li onClick={() => activate(user.id)}>
      <div className={itemWrapperClassName}>
        <div className={itemMarginClassName} />
        <img
          alt="avatar"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuXgk28cnbUBSSM18oK_3YjcXDdnbiDLjNzRpqAs1_Xhu3uTb9"
          className="nav-item__avatar"
        />
        {user.name}
      </div>
    </li>
  );
};

export default NavigationItem;