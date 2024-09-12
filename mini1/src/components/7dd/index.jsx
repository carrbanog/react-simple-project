import React, { useState } from 'react';
import './style.css'; // 외부 CSS 파일 사용

const MenuBar = () => {
  const [showDetail, setShowDetail] = useState(false);
  const [showLocation, setShowLocation] = useState(false);

  const handleProfileClick = () => {
    setShowDetail(!showDetail);
    setShowLocation(false); // Profile 클릭 시 Location 메뉴가 열리지 않도록 처리
  };

  const handleDetailClick = () => {
    setShowLocation(!showLocation);
  };

  return (
    <nav className="menu-bar">
      <ul className="menu-list">
        <li className="menu-item">
          <a href="#profile" onClick={handleProfileClick}>Profile</a>
        </li>
        {showDetail && (
          <li className="menu-item">
            <a href="#detail" onClick={handleDetailClick}>Detail</a>
          </li>
        )}
        {showLocation && (
          <li className="menu-item">
            <a href="#location">Location</a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default MenuBar;
