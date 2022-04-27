import "@styles/globals.css";

import { Layout, Menu, MenuProps, Typography } from "antd";
import { appWithTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { networkInterfaces } from "os";
import React, { Children } from "react";

import {
  HomeFilled,
  LaptopOutlined,
  MailOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";

import type { AppProps } from "next/app";
const { Header, Content, Footer, Sider } = Layout;

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const headerItems: MenuProps["items"] = [
    {
      key: "home",
      icon: <HomeFilled />,
      label: "主页",
      onClick: () => router.push("/"),
    },
    {
      key: "register",
      icon: <UserOutlined />,
      label: "注册",
    },
  ];

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
              label: "label24",
            },
          ],
        },
      ],
    },
  ];

  return (
    <Layout>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          style={{ height: "100%", borderRight: 0 }}
          mode="inline"
          items={siderItems}
        ></Menu>
      </Sider>
      <Layout style={{ minHeight: "100vh", marginLeft: 200 }}>
        <Header style={{ padding: "0px" }}>
          <Typography.Title
            level={3}
            style={{
              float: "left",
              color: "white",
              lineHeight: "inherit",
              margin: "0",
              padding: "0",
            }}
          >
            海港工程总图计算
          </Typography.Title>
          <Menu
            theme="dark"
            mode="horizontal"
            selectable={false}
            style={{ float: "right" }}
            items={headerItems}
          ></Menu>
        </Header>

        <Content style={{ padding: "10px 10px 0px 10px" }}>
          <div
            style={{
              padding: "24px",
              height: "100%",
              background: "#fff",
            }}
          >
            <Component {...pageProps} />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
            height: "40px",
            margin: "0",
            padding: "8px",
          }}
        >
          CCCC Water Transportation Consultant Co. LTD ©2022 Created by Dawsen X
          Sannyii
        </Footer>
      </Layout>
    </Layout>
  );
}

export default appWithTranslation(MyApp);
