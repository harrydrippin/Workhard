import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

var lipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae consectetur est, faucibus tempor massa. Cras sagittis diam quam. Quisque euismod diam ut turpis egestas, vel rhoncus nisi porttitor. Nullam a tempus ligula, ac eleifend sapien. Cras at ante ipsum. Suspendisse potenti. Duis lacinia lobortis vestibulum. Sed feugiat vestibulum pulvinar. Maecenas vestibulum diam ut libero euismod porttitor in vitae purus. Proin eu elit quam.\n Vivamus luctus lectus sit amet enim facilisis, a auctor lacus facilisis. Praesent nec tincidunt enim, vitae rutrum mi. Sed non enim eget odio commodo convallis ac sit amet arcu. Nullam imperdiet lorem vitae consequat pellentesque. Phasellus ut mattis ligula. Sed ac velit scelerisque nisl dapibus vehicula. Quisque tincidunt et mi vitae aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam eu ante urna.\nIn hac habitasse platea dictumst. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras molestie semper ipsum ut tempor. Fusce fringilla, nisl sed sollicitudin pellentesque, quam tellus feugiat dolor, ac malesuada arcu turpis non augue. Donec nunc eros, elementum vitae mi ac, cursus posuere ante. Etiam sollicitudin tempus placerat. Vivamus hendrerit mi nec eros malesuada, et varius felis auctor. Duis ac lorem sit amet justo tincidunt tempus. Maecenas imperdiet pellentesque ante ac congue. Quisque vel lacus urna. Vestibulum fermentum tristique tincidunt. Etiam in tincidunt orci. Morbi egestas, odio eu congue pharetra, turpis ligula accumsan dui, quis consectetur urna nibh ut nisi. Sed ipsum augue, varius a mollis commodo, vulputate at mauris. Morbi ornare nisi velit.";

const style = {
  marginRight: 20,
};

class TextPanel extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    return (
      <div className="panel-wrapper">
        <div className="panel-header">
          <span className="panel-title">발표 자료</span>
        </div>
        <FloatingActionButton className="panel-fab" style={style}>
          <ContentAdd />
        </FloatingActionButton>
        <div className="panel-list">
          <PPTPanel />
        </div>
      </div>
    );
  }
}

class PPTPanel extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    return (
      <div className="container">
        <div className="pptpanel">
          <span className="pptpanel-title">서양철학 최종 PPT</span>
          <div className="pptpanel-detail-wrapper container">
            <div className="col-md-8 pptpanel-left">
              <div className="pptpanel-thumb">
                <div className="pptpanel-thumb-header">
                  최종 수정 날짜 2017.02.05 작성자 asrht1228
                </div>
                <div className="pptpanel-thumb-body">
                  <img src="http://placehold.it/720x400"></img>
                </div>
              </div>
            </div>
            <div className="col-md-4 pptpanel-right">
              <a href="#" className="hover-a">
              <div className="pptpanel-revision">
                <span className="pptpanel-revision-title">서양철학 최종 PPT_v4.pptx</span><br/>
                <span className="pptpanel-revision-detail">수정사항 제목 폰트를 1px 줄임<br/>수정날짜 2017.02.04 수정자 asrht1228</span>
              </div></a>
              <a href="#" className="hover-a">
              <div className="pptpanel-revision-nth">
                <span className="pptpanel-revision-title">서양철학 최종 PPT_v3.pptx</span><br/>
                <span className="pptpanel-revision-detail">수정사항 제목 폰트를 1px 줄임<br/>수정날짜 2017.02.04 수정자 asrht1228</span>
              </div></a>
              <a href="#" className="hover-a">
              <div className="pptpanel-revision-nth">
                <span className="pptpanel-revision-title">서양철학 최종 PPT_v2.pptx</span><br/>
                <span className="pptpanel-revision-detail">수정사항 제목 폰트를 1px 줄임<br/>수정날짜 2017.02.04 수정자 asrht1228</span>
              </div></a>
              <a href="#" className="hover-a">
              <div className="pptpanel-revision-nth">
                <span className="pptpanel-revision-title">서양철학 최종 PPT_v1.pptx</span><br/>
                <span className="pptpanel-revision-detail">수정사항 제목 폰트를 1px 줄임<br/>수정날짜 2017.02.04 수정자 asrht1228</span>
              </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TextPanel;
