import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import SettingIcon from 'material-ui/svg-icons/action/settings';


class ProfileBar extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    return (
      <div className="sidebar">
        <div className="container" style={{marginTop: "20px"}}>
          <img className="img-circle profilebar-image col-md-4" role="presentation"></img>
          <div className="profilebar-info col-md-8">
            <p className="profilebar-name">박서희</p>
            <p className="profilebar-email">asrht1228@gmail.com</p>
          </div>
        </div>
        <FlatButton
          className="profilebar-setting"
          href=""
          target="_blank"
          label="환경 설정"
          primary={true}
          icon={<SettingIcon />}
        />
      </div>
    );
  }
}

export default ProfileBar;
