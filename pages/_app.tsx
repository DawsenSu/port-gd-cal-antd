import "@styles/globals.css";
import type { AppProps } from "next/app";
import { Layout, Menu, MenuProps, Typography } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  MailOutlined,
  HomeFilled,
} from "@ant-design/icons";
import { useRouter } from "next/router";
import { appWithTranslation } from "next-i18next";
import React, { Children } from "react";
import { networkInterfaces } from "os";

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
              label: "label4",
            },
          ],
        },
      ],
    },
  ];

  return (
    <Layout style={{ height: "100vh" }}>
      <Header style={{ padding: "0px" }}>
        <div className="logo" />
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
        </Layout>
      </Layout>

      <Footer
        style={{
          textAlign: "center",
          height: "40px",
          margin: "0",
          padding: "8px",
        }}
      >
        CCCC Water Transportation Consultant Co. LTD ©{new Date().getFullYear()}{" "}
        Created by Dawsen
      </Footer>
    </Layout>
  );
}

export default appWithTranslation(MyApp);
