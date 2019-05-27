import React, {Component} from 'react';
import {Table} from 'antd';
import {connect} from 'dva';

const namespace = 'analysis'

function mapStateToProps(state) {
  return {
    cardsList: state[namespace].list,
    cardsLoading: state.loading.effects[`${namespace}/queryList`]
  }
}

@connect(mapStateToProps)
export default class Analysis extends Component {
  columns = [
    {
      title: '名称',
      dataIndex: 'name',
    },
    {
      title: '描述',
      dataIndex: 'desc',
    },
    {
      title: '链接',
      dataIndex: 'url',
      render: value => <a href={value}>{value}</a>
    },
  ];

  componentDidMount() {
    this.props.dispatch({
      type: `${namespace}/queryList`
    })
  }

  render() {
    const {cardsList, cardsLoading} = this.props
    return (
      <div>
        <h1>Analysis Page</h1>
        <Table columns={this.columns} dataSource={cardsList} loading={cardsLoading} rowKey="id"/>
      </div>
    )
  }
}
