import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import NotificationIcon from 'material-ui/svg-icons/social/notifications';
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import SearchIcon from 'material-ui/svg-icons/action/search';
import AppBar from 'material-ui/AppBar';
import Logo from './logo.png';

class AppContainer extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      muiTheme: getMuiTheme({
        palette: {
          primary1Color: "#2196f3",
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
                    <NotificationIcon className="profile-noti" color={"#FFFFFF"} />
                    <SettingsIcon className="profile-setting" color={"#FFFFFF"} />
                    <SearchIcon className="profile-search" color={"#FFFFFF"} />
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
