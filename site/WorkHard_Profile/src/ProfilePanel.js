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
          <a href="#" className="hover-a">
	  <div className="panel-item-header">
            서양철학:쟁점과토론 기말 팀과제 4조
          </div>
          <div className="panel-item-body">
            자기이해의 윤리학: <strong>소피스트</strong>와 <strong>소크라테스</strong><br />
            그리고 아나바시스와 카타바시스: <strong>플라톤</strong> 윤리학에 대해 조사하여 발표하세요.<br /><br />평가요소<br />

            (1) 주어진 개념 및 인물에 대한 정확한 이해도 (50%)<br /><br />

(2) 독창성과 논리성(체계성) (30%)<br /><br />

(3) 정성적 평가 (20%)<br />
          </div>
	</a>
        </div>
      </div>
    );
  }
}

export default ProfilePanel;
