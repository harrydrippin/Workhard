import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import AssignmentIcon from 'material-ui/svg-icons/action/assignment';
import NoteIcon from 'material-ui/svg-icons/av/note';
import AddIcon from 'material-ui/svg-icons/av/playlist-add';



class SideBar extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-title-wrapper">
          <span className="sidebar-title">카테고리</span>
        </div>
        <List className="sidebar-list">
          <ListItem primaryText="자료조사" style={{color: "#2196f3"}} leftIcon={<AssignmentIcon color={"#2196f3"}/>}/>
          <ListItem primaryText="발표 자료" leftIcon={<NoteIcon />}/>
          <ListItem primaryText="카테고리 추가" leftIcon={<AddIcon />}/>
        </List>
      </div>
    );
  }
}

export default SideBar;
