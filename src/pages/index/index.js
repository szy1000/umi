import React, {Component} from 'react';
import {Card, Button} from 'antd';

import {connect} from 'dva'

const namespace = 'index'

const mapStateToProps = (state) => {
  const list = state[namespace].list;
  return {
    list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickAdd: (newCard) => {
      const action = {
        type: `${namespace}/addNewCard`,
        payload: newCard,
      };
      dispatch(action);
    },
    onDidMount: () => {
      dispatch({
        type: `${namespace}/queryInitCards`,
      })
    }
  };
};

@connect(mapStateToProps, mapDispatchToProps)

// @connect(state => ({...state.index}))

export default class Index extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onDidMount()
  }

  render() {
    return (
      <div>
        {
          this.props.list.map(card => {
            return (
              <Card key={card.id}>
                <div>Q: {card.setup}</div>
                <div>
                  <strong>A: {card.punchline}</strong>
                </div>
              </Card>
            );
          })
        }
        <div>
          <Button onClick={() => this.props.onClickAdd({
            setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            punchline: 'here we use dva',
          })}> 添加卡片 </Button>
        </div>
      </div>
    );
  }
}
