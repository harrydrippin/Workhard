import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import IconButton from 'material-ui/IconButton';
import NotificationIcon from 'material-ui/svg-icons/social/notifications';
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import SearchIcon from 'material-ui/svg-icons/action/search';
import Badge from 'material-ui/Badge';
import AppBar from 'material-ui/AppBar';
import Logo from './logo.png';

class AppContainer extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      muiTheme: getMuiTheme({
        palette: {
          primary1Color: "#2196f3",
          accent1Color: "#152542"
        },
        appBar: {
          height: 60,
        },
      })
    };
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={this.state.muiTheme}>
        <AppBar title=""
                iconElementLeft={<img src={Logo}
                                      role="presentation"
                                      className="service-logo"></img>}
                iconElementRight={
                  <div className="header-right">
                    <img className="img-circle profile-image"
                         role="presentation"></img>
                    <span className="profile-email">
                    asrht1228@gmail.com
                    </span>
                    <span className="caret profile-drop" style={{color: "white"}}></span>
                    <Badge
                    className="profile-noti"
                    badgeContent={10}
                    secondary={true}
                    badgeStyle={{width: "20px", height: "20px", top: 5, right: 5, backgroundColor: "red", margin: "0"}}
                    style={{padding: "0"}}
                    >
                      <IconButton tooltip="알림">
                        <NotificationIcon color={"#FFFFFF"} />
                      </IconButton>
                    </Badge>
                    <IconButton className="profile-setting" tooltip="환경 설정">
                      <SettingsIcon color={"#FFFFFF"} />
                    </IconButton>
                    <IconButton className="profile-search" tooltip="검색하기">
                      <SearchIcon color={"#FFFFFF"} />
                    </IconButton>
                  </div>
                }
                iconStyleRight={
                  {
                    marginTop: "0px !important"
                  }
                }
                showMenuIconButton={true}/>
      </MuiThemeProvider>
    );
  }
}

export default AppContainer;
