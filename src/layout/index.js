import {Component} from "react"
import {Layout, Menu, Icon, Button} from 'antd'
import logo from '../assets/logo.svg';
const {Header, Footer, Sider, Content} = Layout;
import Link from 'umi/link'
import {FormattedMessage, getLocale, setLocale} from 'umi/locale';
// 引入子菜单组件
const SubMenu = Menu.SubMenu;

class BasicLayout extends Component {

  changLang() {
    const locale = getLocale();
    if (!locale || locale === 'zh-CN') {
      setLocale('en-US');
    } else {
      setLocale('zh-CN');
    }
  }

  render() {
    return (
      <Layout>
        <Sider width={256} style={{minHeight: '100vh'}}>
          <div style={{height: '64px', paddingLeft: '24px', background: 'rgba(255,255,255,.2)'}}>
            <Link to="/">
              <img src={logo} style={{height: '32px', verticalAlign: 'middle'}} alt=""/>
              <h1 style={{
                display: 'inline-block',
                marginLeft: '15px',
                lineHeight: '64px',
                fontSize: '20px',
                color: 'white'
              }}>antd_course</h1>
            </Link>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <SubMenu
              key="sub1"
              title={<span><Icon type="dashboard"/><span>Dashboard</span></span>}
            >
              <Menu.Item key="1"><Link to="/dashboard/analysis">分析页</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/dashboard/monitor">监控页</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/dashboard/workplace">工作台</Link></Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{background: '#fff', textAlign: 'center', padding: 0}}>
            <Button size="small" onClick={() => {
              this.changLang();
            }}><FormattedMessage id="lang"/></Button>
          </Header>
          <Content style={{margin: '24px 16px 0'}}>
            <div style={{padding: 24, background: '#fff', minHeight: 360}}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default BasicLayout;
