import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout, Menu, MenuProps, Typography } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  MailOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { appWithTranslation } from "next-i18next";
import React from "react";
import SubMenu from "antd/lib/menu/SubMenu";
import { title } from "process";

const { Header, Content, Footer, Sider } = Layout;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          selectable={false}
          style={{ display: "flex" }}
        >
          <Menu.Item key="home">
            <Link href="/">
              <a>主页 </a>
            </Link>
          </Menu.Item>
          <Menu.Item key="register">注册</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu style={{ height: "100%", borderRight: 0 }} mode="inline">
            <Menu.Item key="1" icon={<UserOutlined />} title="船型数据">
              船型数据
            </Menu.Item>
            <Menu.Item key="2" icon={<LaptopOutlined />} title="水文条件">
              水文条件
            </Menu.Item>
            <SubMenu key="sub1" icon={<MailOutlined />} title="计算表格">
              <Menu.ItemGroup key="g1" title="Item 1">
                <Menu.Item key="g1_1">Option 1</Menu.Item>
                <Menu.Item key="g1_2">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup key="g2" title="Item 2">
                <Menu.Item key="g2_1">Option 3</Menu.Item>
                <Menu.Item key="g2_2">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ padding: "0 50px" }}>
            <div
              style={{
                padding: "24px",
                minHeight: "280px",
                background: "#fff",
              }}
            >
              <Component {...pageProps} />
            </div>
          </Content>
        </Layout>
      </Layout>

      <Footer style={{ textAlign: "center" }}>
        CCCC Water Transportation Consultant Co. LTD ©2022 Created by Dawsen
      </Footer>
    </Layout>
  );
}

export default appWithTranslation(MyApp);
