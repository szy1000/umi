import React, { Component } from 'react';
import { Card,Button } from 'antd';

import {connect} from 'dva'

const namespace = 'about'

const mapStateToProps = (state) => {
  const cardList = state[namespace];
  return {
    cardList,
  };
};

@connect(mapStateToProps)
export default class About extends Component {
  constructor(props) {
    super(props);
  }

  // addNewCard = () => {
  //   this.setState(prevState => {
  //     const prevCardList = prevState.cardList;
  //     const card = {
  //       id: prevState.cardList.length+1,
  //       setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
  //       punchline: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  //     };
  //     return {
  //       cardList: prevCardList.concat(card),
  //     };
  //   });
  // }

  render() {
    console.log(this.props.cardList)
    return (
      <div>
        {/*{*/}
        {/*this.props.cardList.map(card => {*/}
        {/*return (*/}
        {/*<Card key={card.id}>*/}
        {/*<div>Q: {card.setup}</div>*/}
        {/*<div>*/}
        {/*<strong>A: {card.punchline}</strong>*/}
        {/*</div>*/}
        {/*</Card>*/}
        {/*);*/}
        {/*})*/}
        {/*}*/}
        <div>
          {/*<Button onClick={this.addNewCard}> 添加卡片 </Button>*/}
        </div>
      </div>
    );
  }
}
