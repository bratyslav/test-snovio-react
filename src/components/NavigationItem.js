import React from 'react';

const NavigationItem = ({ user }) => {
  return (
    <li>
      <div className="nav-item__wrapper">
        <div className="nav-item__left-margin"></div>

        <div className="nav-item">
          <img
            alt="avatar"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuXgk28cnbUBSSM18oK_3YjcXDdnbiDLjNzRpqAs1_Xhu3uTb9"
            className="nav-item__avatar"
          />
          {user.name}
        </div>
      </div>
    </li>
  );
};

export default NavigationItem;