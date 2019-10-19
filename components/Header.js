import React from "react";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import List from '@material-ui/core/List';
// import TypoGraphy from "@material-ui/core/Typography";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemText from "@material-ui/core/ListItemText";
// import { Home, Book, AccountBox } from "@material-ui/icons";

export default function Header() {
  return (
    <div className = "header">
      <div className = "title-box"> 
            <h1 className = "heading-primary"> 
                  <span className = "heading-primary-main">Untouchable Brain </span>
                  <span className = "heading-primary-sub"> A company which is going to rule the world </span>
            </h1>
            <a href="#" className = "btn btn-white btn-animated">Explore</a>
      </div>
    </div>
  );
}
