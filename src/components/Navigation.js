import React from 'react';

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
              <img
                alt="avatar"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuXgk28cnbUBSSM18oK_3YjcXDdnbiDLjNzRpqAs1_Xhu3uTb9"
                className="nav-item__avatar"
              />
              User Name
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;