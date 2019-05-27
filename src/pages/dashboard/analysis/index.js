import React, {Component} from 'react';
import {Table, Modal, Button, Form, Input} from 'antd';
import {connect} from 'dva';
import {FormattedMessage} from 'umi/locale';

const FormItem = Form.Item;

const namespace = 'analysis'

function mapStateToProps(state) {
  return {
    cardsList: state[namespace].list,
    cardsLoading: state.loading.effects[`${namespace}/queryList`]
  }
}

class Analysis extends Component {
  state = {
    visible: false
  }
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

  showModal = () => {
    this.setState({visible: true});
  }

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  }

  handleOk = () => {
    const {dispatch, form: {validateFields}} = this.props;

    validateFields((err, values) => {
      if (!err) {
        dispatch({
          type: `${namespace}/addOne`,
          payload: values,
        });
        // 重置 `visible` 属性为 false 以关闭对话框
        this.setState({visible: false});
      }
    });
  }

  render() {
    const {cardsList, cardsLoading, form: {getFieldDecorator}} = this.props
    const {visible} = this.state;
    return (
      <div>
        <h1> <FormattedMessage id='helloworld'/></h1>
        <p>dsa</p>
        <Table columns={this.columns} dataSource={cardsList} loading={cardsLoading} rowKey="id"/>
        <Button type="primary" onClick={this.showModal}>新建</Button>
        <Modal title="新建记录"
               visible={visible}
               onOk={this.handleOk}
               onCancel={this.handleCancel}>
          <FormItem label="名称">
            {getFieldDecorator('name', {
              rules: [{required: true}],
            })(
              <Input/>
            )}
          </FormItem>
          <FormItem label="描述">
            {getFieldDecorator('desc')(
              <Input/>
            )}
          </FormItem>
          <FormItem label="链接">
            {getFieldDecorator('url', {
              rules: [{type: 'url'}],
            })(
              <Input/>
            )}
          </FormItem>
        </Modal>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Form.create()(Analysis))
