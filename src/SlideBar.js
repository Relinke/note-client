import React from 'react';
import {Layout, Menu, Icon} from 'antd';

const {Header, Sider, Content} = Layout;

class SiderBar extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Layout>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}
                       style={{overflow: 'auto', height: '100vh', left: 0}}>
                    <div className="logo"/>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Icon type="user"/>
                            <span className="nav-text">nav 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera"/>
                            <span className="nav-text">nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload"/>
                            <span className="nav-text">nav 3</span>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Icon type="bar-chart"/>
                            <span className="nav-text">nav 4</span>
                        </Menu.Item>
                        <Menu.SubMenu key="sub1" title={<span><Icon type="mail"/><span>SubMenu</span></span>}>
                            <Menu.Item key="5">Option 5</Menu.Item>
                            <Menu.Item key="6">Option 6</Menu.Item>
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </Menu.SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{background: '#fff', padding: 0}}>
                        <Icon className="trigger" type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                              onClick={this.toggle}/>
                    </Header>
                    <Content style={{margin: '24px 16px', padding: 24, background: '#fff'}}>
                        Content
                    </Content>
                </Layout>
            </Layout>
        );
    }
}


export default SiderBar;