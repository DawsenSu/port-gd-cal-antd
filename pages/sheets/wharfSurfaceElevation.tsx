import {
  CalculatorTwoTone,
  EditOutlined,
  HomeOutlined,
  LoadingOutlined,
  LogoutOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  Row,
  Space,
  Table,
  Typography,
} from "antd";
import React from "react";

const { Title, Text } = Typography;
const { Meta } = Card;

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const formdata = {
  sjsw1: 10, //设计水位1
};

const hotData = [
  ["", "Tesla", "Volvo", "Toyota", "Honda"],
  ["2020", 10, 11, 12, 13],
  ["2021", 20, 11, 14, 13],
  ["2022", 30, 15, 12, 13],
];

const dataSource = [
  {
    key: "1",
    calcname: "设计水位",
    symbol: "DWL",
    unit: "m",
    fstandard: 5.0,
    wstandard: 5.0,
    rstandard: 5.0,
  },
  {
    key: "2",
    calcname: "波高",
    symbol: "DWL",
    unit: "m",
    fstandard: 5.0,
    wstandard: 5.0,
    rstandard: 5.0,
  },
  {
    key: "3",
    calcname: "波高",
    symbol: "DWL",
    unit: "m",
    fstandard: 5.0,
    wstandard: 5.0,
    rstandard: 5.0,
  },
  {
    key: "4",
    calcname: "码头前波平均周期",
    symbol: "DWL",
    unit: "m",
    fstandard: 5.0,
    wstandard: 5.0,
    rstandard: 5.0,
  },
  {
    key: "5",
    calcname: "深水波长",
    symbol: "DWL",
    unit: "m",
    fstandard: 5.0,
    wstandard: 5.0,
    rstandard: 5.0,
  },
  {
    key: "6",
    calcname: "码头前波长",
    symbol: "DWL",
    unit: "m",
    fstandard: 5.0,
    wstandard: 5.0,
    rstandard: 5.0,
  },
  {
    key: "7",
    calcname: "码头前沿设计底高程",
    symbol: "DWL",
    unit: "m",
    fstandard: 5.0,
    wstandard: 5.0,
    rstandard: 5.0,
  },
  {
    key: "8",
    calcname: "码头前沿设计水深",
    symbol: "DWL",
    unit: "m",
    fstandard: 5.0,
    wstandard: 5.0,
    rstandard: 5.0,
  },
  {
    key: "9",
    calcname: "深水波判断",
    symbol: "DWL",
    unit: "m",
    fstandard: 5.0,
    wstandard: 5.0,
    rstandard: 5.0,
  },
  {
    key: "10",
    calcname: "码头前沿波浪放射系数",
    symbol: "DWL",
    unit: "m",
    fstandard: 5.0,
    wstandard: 5.0,
    rstandard: 5.0,
  },
  {
    key: "11",
    calcname: "波浪中心超出净水面高度",
    symbol: "DWL",
    unit: "m",
    fstandard: 5.0,
    wstandard: 5.0,
    rstandard: 5.0,
  },
  {
    key: "12",
    calcname: "波浪中心超出净水面高度",
    symbol: "DWL",
    unit: "m",
    fstandard: 5.0,
    wstandard: 5.0,
    rstandard: 5.0,
  },
  {
    key: "13",
    calcname: "波浪中心超出净水面高度",
    symbol: "DWL",
    unit: "m",
    fstandard: 5.0,
    wstandard: 5.0,
    rstandard: 5.0,
  },
  {
    key: "14",
    calcname: "波浪中心超出净水面高度",
    symbol: "DWL",
    unit: "m",
    fstandard: 5.0,
    wstandard: 5.0,
    rstandard: 5.0,
  },
  {
    key: "15",
    calcname: "波浪中心超出净水面高度",
    symbol: "DWL",
    unit: "m",
    fstandard: 5.0,
    wstandard: 5.0,
    rstandard: 5.0,
  },
  {
    key: "16",
    calcname: "波浪中心超出净水面高度",
    symbol: "DWL",
    unit: "m",
    fstandard: 5.0,
    wstandard: 5.0,
    rstandard: 5.0,
  },
  {
    key: "17",
    calcname: "最后一行",
    symbol: "DWL",
    unit: "m",
    fstandard: 5.0,
    wstandard: 5.0,
    rstandard: 5.0,
  },
];

const columns = [
  {
    title: "计算参数",
    dataIndex: "calcname",
    key: "calcname",
    render: (text) => <h3>{text}</h3>,
    width: 150,
  },
  {
    title: "符号",
    dataIndex: "symbol",
    key: "symbol",
    width: 150,
    render: (text) => <i>{text}</i>,
  },
  {
    title: "单位",
    dataIndex: "unit",
    key: "unit",
    width: 150,
  },
  {
    title: "受力标准",
    // dataIndex: 'force',
    // key: 'force',
    items: [
      {
        title: "基本标准",
        dataIndex: "fstandard",
        key: "fstandard",
        width: 150,
      },
    ],
  },
  {
    title: "上水标准",
    // dataIndex: 'waterlift',
    // key: 'waterlift',
    children: [
      {
        title: "基本标准",
        dataIndex: "wstandard",
        key: "wstandard",
        width: 150,
      },
      {
        title: "复核标准",
        dataIndex: "rstandard",
        key: "rstandard",
        width: 150,
      },
    ],
  },
];

/* 将样式抽取到一个变量中 */
const tablewidth = {
  width: "50%",
  height: "50%",
  overflow: "auto",
  // color:"red"
};
const FormClass = {
  width: "50%",
  // color:"red"
};

const wharfSurfaceElevation = () => {
  return (
    <div>
      <Row gutter={16}>
        <Col span={24}>
          <Space>
            <HomeOutlined />
            <SettingFilled />
            <SmileOutlined />
            <SyncOutlined spin />
            <SmileOutlined rotate={180} />
            <LoadingOutlined />
          </Space>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Title>码头面高程</Title>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Title level={2}>
            <CalculatorTwoTone />
            码头前沿设计高程计算表
          </Title>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Title level={3} type="warning">
            <EditOutlined /> 输入条件：
          </Title>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 24 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item label="计算参数" style={{ marginBottom: "4px" }}>
              {/* 表头 */}
              <Form.Item
                style={{
                  display: "inline-block",
                  width: "calc(30% - 8px)",
                  margin: "0 8px",
                }}
              >
                <Title level={5}>受力标准(基本标准)</Title>
              </Form.Item>
              <Form.Item
                style={{
                  display: "inline-block",
                  width: "calc(30% - 8px)",
                  margin: "0 8px",
                }}
              >
                <Title level={5}>上水标准(基本标准)</Title>
              </Form.Item>
              <Form.Item
                style={{
                  display: "inline-block",
                  width: "calc(30% - 8px)",
                  margin: "0 8px",
                }}
              >
                <Title level={5}>上水标准(复核标准)</Title>
              </Form.Item>
            </Form.Item>
            {/* 设计水位 */}
            <Form.Item
              label="设计水位 DWL (单位：m/米)"
              name="sjsw"
              style={{ marginBottom: "10px" }}
              // rules={[{ required: true }]}
            >
              <Form.Item
                name="sjsw1"
                rules={[{ required: true }]}
                style={{
                  display: "inline-block",
                  width: "calc(30% - 8px)",
                  margin: "0 8px",
                }}
              >
                <Input placeholder="受力基本标准" suffix="m" />
              </Form.Item>
              <Form.Item
                name="sjsw2"
                rules={[{ required: true }]}
                style={{
                  display: "inline-block",
                  width: "calc(30% - 8px)",
                  margin: "0 8px",
                }}
              >
                <Input placeholder="上水基本标准" suffix="m" />
              </Form.Item>
              <Form.Item
                name="sjsw3"
                rules={[{ required: true }]}
                style={{
                  display: "inline-block",
                  width: "calc(30% - 8px)",
                  margin: "0 8px",
                }}
              >
                <Input placeholder="上水复核标准" suffix="m" />
              </Form.Item>
            </Form.Item>

            {/* 波高h1 */}
            <Form.Item
              label={
                <Text type="success" italic>
                  波高 H1% (单位：m/米)
                </Text>
              }
              name="bgone"
              style={{ marginBottom: "10px" }}
              // rules={[{ required: true }]}
            >
              <Form.Item
                name="bgone1"
                rules={[{ required: true }]}
                style={{
                  display: "inline-block",
                  width: "calc(30% - 8px)",
                  margin: "0 8px",
                }}
              >
                <Input placeholder="受力基本标准" suffix="m" />
              </Form.Item>
              <Form.Item
                name="bgone2"
                // rules={[{ required: true }]}
                style={{
                  display: "inline-block",
                  width: "calc(30% - 8px)",
                  margin: "0 8px",
                }}
              >
                <Input placeholder="上水基本标准" suffix="m" disabled />
              </Form.Item>
              <Form.Item
                name="bgone3"
                // rules={[{ required: true }]}
                style={{
                  display: "inline-block",
                  width: "calc(30% - 8px)",
                  margin: "0 8px",
                }}
              >
                <Input placeholder="上水复核标准" suffix="m" disabled />
              </Form.Item>
            </Form.Item>

            {/* 波高h4 */}
            <Form.Item
              label={
                <Text type="danger" italic>
                  波高 H4% (单位：m/米)
                </Text>
              }
              name="bgfour"
              style={{ marginBottom: "10px" }}
              // rules={[{ required: true }]}
            >
              <Form.Item
                name="bgfour1"
                // rules={[{ required: true }]}
                style={{
                  display: "inline-block",
                  width: "calc(30% - 8px)",
                  margin: "0 8px",
                }}
              >
                <Input placeholder="受力基本标准" suffix="m/米" disabled />
              </Form.Item>
              <Form.Item
                name="bgfour2"
                rules={[{ required: true }]}
                style={{
                  display: "inline-block",
                  width: "calc(30% - 8px)",
                  margin: "0 8px",
                }}
              >
                <Input placeholder="上水基本标准" suffix="m/米" />
              </Form.Item>
              <Form.Item
                name="bgfour3"
                rules={[{ required: true }]}
                style={{
                  display: "inline-block",
                  width: "calc(30% - 8px)",
                  margin: "0 8px",
                }}
              >
                <Input placeholder="上水复核标准" suffix="m/米" />
              </Form.Item>
            </Form.Item>

            {/* 码头前波平均周期 */}
            <Form.Item
              label={
                <Text type="warning" italic>
                  码头前波平均周期 T (单位：s/秒)
                </Text>
              }
              name="mtqbpjzq"
              style={{ marginBottom: "10px" }}
              // rules={[{ required: true }]}
            >
              <Form.Item
                name="mtqbpjzq1"
                rules={[{ required: true }]}
                style={{
                  display: "inline-block",
                  width: "calc(30% - 8px)",
                  margin: "0 8px",
                }}
              >
                <Input placeholder="受力基本标准" suffix="s/秒" />
              </Form.Item>
              <Form.Item
                name="mtqbpjzq2"
                rules={[{ required: true }]}
                style={{
                  display: "inline-block",
                  width: "calc(30% - 8px)",
                  margin: "0 8px",
                }}
              >
                <Input placeholder="上水基本标准" suffix="s/秒" />
              </Form.Item>
              <Form.Item
                name="mtqbpjzq3"
                rules={[{ required: true }]}
                style={{
                  display: "inline-block",
                  width: "calc(30% - 8px)",
                  margin: "0 8px",
                }}
              >
                <Input placeholder="上水复核标准" suffix="s/秒" />
              </Form.Item>
            </Form.Item>

            {/* 码头前沿设计底高程 */}
            <Form.Item
              label={
                <Text type="warning" italic>
                  码头前沿设计底高程 dh (单位：m/米)
                </Text>
              }
              name="mtqqsjdgc"
              style={{ marginBottom: "10px" }}
              // rules={[{ required: true }]}
            >
              <Form.Item
                name="mtqqsjdgc1"
                rules={[{ required: true }]}
                style={{
                  display: "inline-block",
                  width: "calc(30% - 8px)",
                  margin: "0 8px",
                }}
              >
                <Input placeholder="受力基本标准" suffix="m/米" />
              </Form.Item>
              <Form.Item
                name="mtqqsjdgc2"
                // rules={[{ required: true }]}
                style={{
                  display: "inline-block",
                  width: "calc(30% - 8px)",
                  margin: "0 8px",
                }}
              >
                <Input placeholder="上水基本标准" suffix="m/米" disabled />
              </Form.Item>
              <Form.Item
                name="mtqqsjdgc3"
                // rules={[{ required: true }]}
                style={{
                  display: "inline-block",
                  width: "calc(30% - 8px)",
                  margin: "0 8px",
                }}
              >
                <Input placeholder="上水复核标准" suffix="m/米" disabled />
              </Form.Item>
            </Form.Item>

            {/* 码头前沿波浪反射系数 */}
            <Form.Item
              label={
                <Text type="warning" italic>
                  码头前沿波浪反射系数
                </Text>
              }
              name="blqyblfsxs"
              style={{ marginBottom: "10px" }}
              // rules={[{ required: true }]}
            >
              <Form.Item
                name="blqyblfsxs1"
                rules={[{ required: true }]}
                style={{
                  display: "inline-block",
                  width: "calc(30% - 8px)",
                  margin: "0 8px",
                }}
              >
                <Input placeholder="受力基本标准" suffix="Num" />
              </Form.Item>
              <Form.Item
                name="blqyblfsxs2"
                rules={[{ required: true }]}
                style={{
                  display: "inline-block",
                  width: "calc(30% - 8px)",
                  margin: "0 8px",
                }}
              >
                <Input placeholder="上水基本标准" suffix="Num" />
              </Form.Item>
              <Form.Item
                name="blqyblfsxs3"
                rules={[{ required: true }]}
                style={{
                  display: "inline-block",
                  width: "calc(30% - 8px)",
                  margin: "0 8px",
                }}
              >
                <Input placeholder="上水复核标准" suffix="Num" />
              </Form.Item>
            </Form.Item>

            {/* 码头上部结构不承受上托力部分的高度 */}
            <Form.Item
              label={
                <Text mark italic>
                  码头上部结构不承受上托力部分的高度 (单位：m/米)
                </Text>
              }
              name="mtsbjgbcsstlbf"
              style={{ marginBottom: "10px" }}
              // rules={[{ required: true }]}
              labelCol={{ span: 11 }}
            >
              <Form.Item
                name="mtsbjgbcsstlbf1"
                rules={[{ required: true }]}
                style={{
                  display: "inline-block",
                  width: "calc(30% - 8px)",
                  margin: "0 8px",
                }}
              >
                <Input placeholder="受力基本标准" suffix="m/米" />
              </Form.Item>
              <Form.Item
                name="mtsbjgbcsstlbf2"
                // rules={[{ required: true }]}
                style={{
                  display: "inline-block",
                  width: "calc(30% - 8px)",
                  margin: "0 8px",
                }}
              >
                <Input placeholder="上水基本标准" suffix="m/米" disabled />
              </Form.Item>
              <Form.Item
                name="mtsbjgbcsstlbf3"
                // rules={[{ required: true }]}
                style={{
                  display: "inline-block",
                  width: "calc(30% - 8px)",
                  margin: "0 8px",
                }}
              >
                <Input placeholder="上水复核标准" suffix="m/米" disabled />
              </Form.Item>
            </Form.Item>

            <Form.Item wrapperCol={{ span: 16 }}>
              <Button type="primary" htmlType="submit">
                确认数据并计算
              </Button>
            </Form.Item>
          </Form>

          <Title level={3} type="success">
            <LogoutOutlined /> 输出结果：
          </Title>

          <Card
            title="码头面设计高程"
            extra={<a href="#">More</a>}
            style={{ width: 500 }}
          >
            <p>
              <Text type="success" italic>
                受力标准（基本标准）- 码头面设计高程 - E1 : 10.380
              </Text>
            </p>
            <p>
              <Text type="warning" italic>
                受力标准（基本标准）- 码头面设计高程 - E2 : 10.380
              </Text>
            </p>
            <p>
              <Text italic>上水标准（基本标准）- 码头面设计高程 : 10.380</Text>
            </p>
            <p>
              <Text mark italic>
                上水标准（复核标准）- 码头面设计高程 : 10.380
              </Text>
            </p>
          </Card>
          <Card
            title="维护良好的码头高程"
            extra={<a href="#">More</a>}
            style={{ width: 500 }}
          >
            <p>
              <Text type="success" italic>
                上水标准（基本标准）- 码头面设计高程 - E1- : 10.380
              </Text>
            </p>
            <p>
              <Text type="warning" italic>
                上水标准（基本标准）- 码头面设计高程 - E2- : 10.380
              </Text>
            </p>
            <p>
              <Text italic>
                上水标准（复核标准）- 码头面设计高程 - E1- : 10.380
              </Text>
            </p>
            <p>
              <Text mark italic>
                上水标准（复核标准）- 码头面设计高程 - E2- : 10.380
              </Text>
            </p>
          </Card>
        </Col>
        <Col span={12}>
          <Table dataSource={dataSource} columns={columns} pagination={false} />
        </Col>
      </Row>
      <Row>
        <Col span={12}></Col>
        <Col span={12}>col-6</Col>
      </Row>
    </div>
  );
};

export default wharfSurfaceElevation;
