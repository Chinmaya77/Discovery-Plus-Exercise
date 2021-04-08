import React from "react";
import "./style.css";
import Image from "../../atoms/image/Image";
import Search from "../../molecules/search/Search";
import NavLinks from "../../molecules/navLinks/NavLinks";

function Header() {
  const linkData = ["Home", "Explore", "Shorts", "MindBlown", "Premium"];

  return (
    <div className="header-container">
      <Image
        source="items.jpg"
        height="30"
        width="25"
        imgBorder="content-bar"
      ></Image>
      <Image
        source="discovery-logo.png"
        height="40"
        width="200"
        className="logo-img"
        imgBorder="logo-bar"
      ></Image>

      <NavLinks linkData={linkData}></NavLinks>

      <Search></Search>
    </div>
  );
}

export default Header;
