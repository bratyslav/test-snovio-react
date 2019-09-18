import React from 'react';
import { users } from '../../API/API';
import NavigationItem from "./NavigationItem";

const Navigation = () => {
  return (
    <nav className="navigation">
      <h1 className="header">ilex</h1>
      <h2 className="header__subscriptions">subscriptions</h2>

      <ul className="navigation__item-list">
        <li>
          <div className="nav-item__wrapper">
            <div className="nav-item__left-margin"></div>

            <div className="nav-item">
              <div className="nav-item__all-avatar">ilex</div>
              All subscriptions
            </div>
          </div>
        </li>
        {
          users.map(user => <NavigationItem key={user.id} user={user} />)
        }
      </ul>
    </nav>
  );
};

export default Navigation;