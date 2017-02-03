import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

var lipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae consectetur est, faucibus tempor massa. Cras sagittis diam quam. Quisque euismod diam ut turpis egestas, vel rhoncus nisi porttitor. Nullam a tempus ligula, ac eleifend sapien. Cras at ante ipsum. Suspendisse potenti. Duis lacinia lobortis vestibulum. Sed feugiat vestibulum pulvinar. Maecenas vestibulum diam ut libero euismod porttitor in vitae purus. Proin eu elit quam.\n Vivamus luctus lectus sit amet enim facilisis, a auctor lacus facilisis. Praesent nec tincidunt enim, vitae rutrum mi. Sed non enim eget odio commodo convallis ac sit amet arcu. Nullam imperdiet lorem vitae consequat pellentesque. Phasellus ut mattis ligula. Sed ac velit scelerisque nisl dapibus vehicula. Quisque tincidunt et mi vitae aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam eu ante urna.\nIn hac habitasse platea dictumst. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras molestie semper ipsum ut tempor. Fusce fringilla, nisl sed sollicitudin pellentesque, quam tellus feugiat dolor, ac malesuada arcu turpis non augue. Donec nunc eros, elementum vitae mi ac, cursus posuere ante. Etiam sollicitudin tempus placerat. Vivamus hendrerit mi nec eros malesuada, et varius felis auctor. Duis ac lorem sit amet justo tincidunt tempus. Maecenas imperdiet pellentesque ante ac congue. Quisque vel lacus urna. Vestibulum fermentum tristique tincidunt. Etiam in tincidunt orci. Morbi egestas, odio eu congue pharetra, turpis ligula accumsan dui, quis consectetur urna nibh ut nisi. Sed ipsum augue, varius a mollis commodo, vulputate at mauris. Morbi ornare nisi velit.";


class TextPanel extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    return (
      <div className="panel-wrapper">
        <div className="panel-header">
          <span className="panel-title">자료 조사</span>
        </div>
        <div className="panel-list">
          <PanelItem />
          <PanelItem />
          <PanelItem />
        </div>
      </div>
    );
  }
}

class PanelItem extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    return (
      <div className="panelitem-wrapper container">
        <span className="panelitem-title">인터렉티브미디어 리서치</span>
        <div className="panelitem-area">
          <div className="panelitem-area-header">
            <span className="panelitem-area-date">2017.02.05</span>
            <span className="panelitem-area-author">작성자 asrht1228</span>
          </div>
          <div className="panelitem-area-detail">
            {lipsum}
            <RaisedButton label="수정하기" primary={true} style={{
              position: "absolute", bottom: "20", right: "20", float: "right"
            }}/>
          </div>
        </div>
      </div>
    );
  }
}

export default TextPanel;
