import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout, Menu, MenuProps } from "antd";
import Link from "next/link";

const { Header, Content, Footer } = Layout;
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
      <Content style={{ padding: "0 50px" }}>
        <div
          style={{ padding: "24px", minHeight: "280px", background: "#fff" }}
        >
          <Component {...pageProps} />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        CCCC Water Transportation Consultant Co. LTD ©2022 Created by Dawsen
      </Footer>
    </Layout>
  );
}

export default MyApp;
