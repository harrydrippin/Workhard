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
          <span className="panel-title">자료 조사</span>
        </div>
        <FloatingActionButton className="panel-fab" style={style}>
          <ContentAdd />
        </FloatingActionButton>
        <div className="panel-list">
          <PanelItem text={"<img style='float:left; margin-right:7px' src='http://mblogthumb3.phinf.naver.net/20140822_38/1019milk_14086438069986ktYq_JPEG/sanctuary-of-apollo-bank.jpg?type=w2' width='200' height='150' /><br /> 소크라테스는 법정 변론을 통해 자신에 대해 널리 퍼져있는 소문들이 잘못된 것임을 해명하고자 하며, 젊은이들을 타락시킨다는 비난과 신성모독이라는 고발 내용이 허위임을 입증하고자 한다. 각각의 고발 항목들을 구체적으로 거론하며 반박하는 가운데 소크라테스가 철학자로서 살아온 평생의 이야기와 삶의 신조가 압축적으로 드러나고 있다. 소크라테스는 자신에 대한 사람들의 오해가 인간으로서의 ‘훌륭하디훌륭함’을 추구하여온 그의 생활 때문에 생긴 것이라고 주장한다. 이와 같은 해명을 통해 『소크라테스의 변론』 전체 내용의 핵심이 되는 ‘훌륭하디훌륭함’이라는 개념이 소크라테스의 삶의 태도, 철학함의 방식, 철학자로서의 사명, 죽음을 대하는 관점을 관통하고 있는 것을 볼 수 있다."} who={"asrht1228"} visible={"visible"} />
          <PanelItem text={"소크라테스는 아테네에 퍼져 있는 자신에 관한 소문과 비방에 대해 반박하기 위해 그가 아테네 사람들에게 잘못 알려지게 된 계기를 설명한다. 그는 자신이 어떤 지혜, 곧 ‘인간적인 지혜(anthropine sophia)’로 인해서 오해를 받게 되었다고 말한다. 이와 관련해서 소크라테스의 절친한 친구였던 카이레폰의 신탁 이야기가 제기된다. 어느 날 카이레폰은 델피 신전에 가서 소크라테스보다도 더 현명한 이가 있는지를 신께 묻고 이에 대한 대답을 구했다. 신전 여제관은 이 질문에 대해 소크라테스보다 더 현명한 자는 아무도 없다고 응답하였다. 이 사실을 전해 듣게 된 소크라테스는 의문에 빠진다. 그는 자신이 현명하지 않다는 사실을 너무나도 잘 자각하고 있기 때문에 신탁의 의미가 무엇인지에 대해 당혹스러워한다. 그래서 그는 이 신탁의 진정한 의미를 알기 위해 자신보다도 더 현명한 것으로 생각되는 사람들을 직접 찾아다녀 보기로 한다."
 } who={"donghyun"} visible={"hidden"} />
          <PanelItem text={"플라톤 철학에서 지혜, 아름다움, 선과 같은 완전함에 대한 추구를 이끌어내는 원동력은 ‘결여’라고 묘사되는 것이 전형적이다. 우리는 참된 지혜가 없기 때문에 지혜를 추구하게 된다. 우리는 아름답지 않기 때문에 아름다움을 추구하게 된다. 이미 지혜롭고 아름다운 이는 더 이상 그것들을 추구할 수가 없다. 무엇인가에 대한 결여가 그것을 추구하기 위한 동력을 만들어낸다는 이러한 생각은 플라톤의 대화편 전체에서 확인될 수 있는 주제이다. 각 대화편들의 주인공으로 등장하는 소크라테스는 언제나 결여된 자의 위치에서 스스로 답을 안다고 생각하는 인물들을 향해 질문을 던짐으로써 논의를 진행해 나간다. 결여를 통한 추구함은 이렇듯 대화편들 전체에서 소크라테스의 철학함의 방식을 만들어 내며 그가 사람들을 향해 질문하며 답을 찾아나갈 수 있도록 한다. 결여가 추구함을 만들어낸다는 이 생각은 플라톤의 중기 대화편 가운데 하나인 『향연』에서 보다 명시적으로 확인할 수 있다. 아가톤의 집에서 열린 향연에 관한 이 대화편은 사랑 혹은 사랑의 신인 ‘에로스(eros)’를 주제로 다루고 있다. 술자리가 무르익자 향연에 참여한 인물들은 각자 차례대로 에로스 신을 찬양해 보기로 한다. 여기서 소크라테스를 제외한 나머지 등장인물들은 모두 하나같이 에로스 신과 사랑이 지닌 여러 가지 아름다움에 대해 찬사를 돌린다. 그런데 역설적이게도 소크라테스는 자신이 사랑에 대해 찬양해야 하는 차례가 왔을 때, 앞서 사랑의 아름다움을 묘사한 다른 이들과는 달리, 사랑은 결코 아름답지 않으며 도리어 아름다움을 결여하고 있기 때문에 아름다움을 욕망하는 존재라고 설명한다. 이미 아름다운 것은 더 이상 아름다움을 욕망할 필요가 없지만, 사랑은 아름다움과 추함 사이에 있기 때문에 아름다움을 욕망하고자 한다는 것이다. 결여가 추구함을 만들어 낸다는 플라톤의 생각은 다음과 같은 『향연』 속 소크라테스의 논증에서 드러나고 있다."} who={"hahaha"} visible={"hidden"} />
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
        <span className="panelitem-title">서양철학:쟁점과토론 기말 팀과제 4조</span>
        <div className="panelitem-area">
          <div className="panelitem-area-header">
            <span className="panelitem-area-date">2017.02.05</span>
            <span className="panelitem-area-author">작성자 {this.props.who}</span>
          </div>
          <div className="panelitem-area-detail">
            <div dangerouslySetInnerHTML={{__html: this.props.text}} />
            <RaisedButton label="수정하기" primary={true} style={{
              visibility : this.props.visible, position: "absolute", bottom: "20", right: "20", float: "right"
            }}/>
          </div>
        </div>
      </div>
    );
  }
}

export default TextPanel;
