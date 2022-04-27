import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "@styles/Home.module.css";
import Link from "next/link";
import { Typography } from "antd";

const routes = [
  {
    id: 1,
    label: "船型尺度查询",
    path: "/sheets/shipDimensionQuery",
  },
  {
    id: 2,
    label: "水文基础数据",
    path: "/sheets/hydrologyBasicData",
  },
  {
    id: 3,
    label: "重力墩波峰面高度",
    path: "/sheets/waveHeight",
  },
  {
    id: 4,
    label: "码头面高程",
    path: "/sheets/wharfSurfaceElevation",
  },
  {
    id: 5,
    label: "码头前沿设计底高程",
    path: "/sheets/wharfFrontBottomElevation",
  },
];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>主页</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.container}>
        <div className={styles.title}>
          <Typography.Title level={2}>模块</Typography.Title>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {routes.map((route) => {
            return (
              <div key={route.id} className={styles.card}>
                <Link href={route.path}>
                  <a>{route.label}</a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
