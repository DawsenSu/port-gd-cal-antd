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
import React, { Children } from "react";
import SubMenu from "antd/lib/menu/SubMenu";
import { title } from "process";

const { Header, Content, Footer, Sider } = Layout;

// todo tobe modified acoording to final design
const siderItems: MenuProps["items"] = [
  {
    key: "1",
    icon: <UserOutlined />,
    label: "船型数据",
  },
  {
    key: "2",
    icon: <LaptopOutlined />,
    label: "水文条件",
  },
  {
    key: "3",
    icon: <MailOutlined />,
    label: "计算表格",
    children: [
      {
        type: "group",
        label: "Group 1",
        children: [
          {
            key: "subgroup1_item1",
            label: "label1",
          },
          {
            key: "subgroup1_item2",
            label: "label2",
          },
        ],
      },
      {
        type: "group",
        label: "Group 2",
        children: [
          {
            key: "subgroup2_item3",
            label: "label3",
          },
          {
            key: "subgroup2_item4",
            label: "label4",
          },
        ],
      },
    ],
  },
];

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
          <Menu
            theme="dark"
            style={{ height: "100%", borderRight: 0 }}
            mode="inline"
            items={siderItems}
          ></Menu>
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
