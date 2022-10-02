import React from "react";
import { Fragment } from "react";

import imgFood from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShownCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={imgFood} alt="foods on table"></img>
      </div>
    </Fragment>
  );
};

export default Header;
