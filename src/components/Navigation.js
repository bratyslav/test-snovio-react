import React, { useState } from 'react';
import { users } from '../../API/API';
import NavigationItem from "./NavigationItem";
const classNames = require('classnames');

const Navigation = () => {
  const [userList, updateUserList] = useState(users.map(user => (
    { ...user, isActive: false }
  )));
  const [isActiveAll, toggleActiveAll] = useState(true);

  const itemMarginClassName = classNames({
    'nav-item__left-margin': !isActiveAll,
    'nav-item__left-margin -nav-item-left-margin-active': isActiveAll
  });

  const itemWrapperClassName = classNames({
    'nav-item__wrapper': !isActiveAll,
    'nav-item__wrapper -nav-item-active': isActiveAll
  });

  const activate = (id) => {
    if (id === 'all') {
      toggleActiveAll(true)
    } else {
      toggleActiveAll(false)
    }

    updateUserList(users.map(user => (
      user.id === id ? { ...user, isActive: true } : { ...user, isActive: false }
    )));
  };


  return (
    <nav className="navigation">
      <h1 className="header">ilex</h1>
      <h2 className="header__subscriptions">subscriptions</h2>

      <ul className="navigation__item-list">
        <li onClick={() => activate('all')} className={itemWrapperClassName}>
          <div className={itemMarginClassName} />
          <div className="nav-item__all-avatar">ilex</div>
          All subscriptions
        </li>
        {
          userList.map(user => (
            <NavigationItem key={user.id} user={user} activate={activate} />
          ))
        }
      </ul>
    </nav>
  );
};

export default Navigation;