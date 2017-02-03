import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

var lipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae consectetur est, faucibus tempor massa. Cras sagittis diam quam. Quisque euismod diam ut turpis egestas, vel rhoncus nisi porttitor. Nullam a tempus ligula, ac eleifend sapien. Cras at ante ipsum. Suspendisse potenti. Duis lacinia lobortis vestibulum. Sed feugiat vestibulum pulvinar. Maecenas vestibulum diam ut libero euismod porttitor in vitae purus. Proin eu elit quam.\n Vivamus luctus lectus sit amet enim facilisis, a auctor lacus facilisis. Praesent nec tincidunt enim, vitae rutrum mi. Sed non enim eget odio commodo convallis ac sit amet arcu. Nullam imperdiet lorem vitae consequat pellentesque. Phasellus ut mattis ligula. Sed ac velit scelerisque nisl dapibus vehicula. Quisque tincidunt et mi vitae aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam eu ante urna.\nIn hac habitasse platea dictumst. Cum sociis natoque penatibus";

class ProfilePanel extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    return (
      <div className="panel-wrapper">
        <div className="panel-header">
          <span className="panel-title">마이 페이지</span>
        </div>
        <div className="container panel-grid">
          <ContentPanel />
          <ContentPanel />
          <ContentPanel />
          <ContentPanel />
          <ContentPanel />
          <ContentPanel />
        </div>
        <FloatingActionButton style={{
          position: 'absolute',
          bottom: 75,
          right: 90
        }}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    );
  }
}

class ContentPanel extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    return (
      <div className="col-md-4 panel-item">
        <div className="panel-item-wrapper">
          <div className="panel-item-header">
            인터렉티브미디어 리서치 2017.02.25
          </div>
          <div className="panel-item-body">
            {lipsum}
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePanel;
