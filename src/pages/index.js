import {Card,Layout} from 'antd'

const { Header, Footer, Sider, Content } = Layout;

export default () => {
  const style = {
    width: '400px',
    margin: '30px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    border: '1px solid #e8e8e8',
  };
  return <Layout>
      <Sider>Sider</Sider>
      <Layout>
        <Header>Header <div>hello world</div></Header>
        <Content>Content
          <Card style={style} actions={[<a>操作一</a>, <a>操作二</a>]}>
        </Card></Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
}
