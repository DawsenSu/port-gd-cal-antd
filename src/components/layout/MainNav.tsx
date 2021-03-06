import {
  HomeFilled,
  HomeOutlined,
  LaptopOutlined,
  LoginOutlined,
  LogoutOutlined,
  MailOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Layout, Menu, MenuProps, Typography } from "antd";
import { useRouter } from "next/router";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const { Header, Content, Footer, Sider } = Layout;

const MainNav = (props: { mainPage: React.ReactNode }) => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const headerItems: MenuProps["items"] = [
    {
      key: "home",
      icon: <HomeOutlined />,
      label: "主页",
      onClick: () => router.push("/"),
    },
    {
      key: "login",
      icon: <LoginOutlined />,
      label: "登录",
      style: { display: session ? "none" : "block" },
      onClick: () => {
        signIn();
      },
    },
    {
      key: "logout",
      icon: <LogoutOutlined />,
      label: "登出",
      style: { display: session?.user ? "block" : "none" },
      onClick: () => {
        signOut();
      },
    },
    {
      key: "register",
      icon: <UserOutlined />,
      label: "注册",
      style: { display: session ? "none" : "block" },
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
        <div
          style={{
            float: "left",
            width: "120px",
            height: "31px",
            margin: "16px 24px 16px 26px",
            background: "rgba(255, 255, 255, 0.3)",
          }}
        />
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
          <Avatar
            size={44}
            style={{
              color: "#f56a00",
              backgroundColor: "#fde3cf",
              float: "right",
              margin: "10px 20px",
            }}
          >
            U
          </Avatar>
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
            {props.mainPage}
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
};

export default MainNav;
