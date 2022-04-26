import React from "react";
import { Form, Input, InputNumber, Button, Radio, Popover, Drawer } from "antd";
import calWaveLength, {
  calExceedWaveHeight,
  calMaxWaveHeight,
} from "@lib/functions/cals";
import { useState } from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import Head from "next/head";

interface Inputs {
  designWaterLevel: number;
  waveHeight: number;
  averageWavePeriod: number;
  bottomElevationFrontBerth: number;
  roundSinglPierWaveDir: number;
  singleRowInterval: number;
  singleRowDiameter: number;
  puesdoRoundSinglePierWaveDir: number;
  puesdoSingleRowInterval: number;
  puesdoSingleRowDiameter: number;
}

type ResultType = {
  waveLength: number;
  isDeepWave: boolean;
  waveExceedHeight: number;
  roundSinglePierParam: {
    crestHeightRegular: number;
    crestHeightIrregular: number;
    maxCrestHRegular: number;
    maxCrestHIrregular: number;
  };
  roundRowPierParam: {
    singlePierMaxCrestHR: number;
    singlePierMaxCrestHIr: number;
    doublePierMaxCrestHR: number;
    doublePierMaxCrestHIr: number;
  };
  puesdoSinglePierParam: {
    crestHeightRegular: number;
    crestHeightIrregular: number;
    maxCrestHRegular: number;
    maxCrestHIrregular: number;
  };
  puesdoSingleRowPierParam: {
    maxCrestHRegular: number;
    maxCrestHIrregular: number;
  };
};
const requireToolTip = "此字段为必填";
const formItemWrapCol = { wrapperCol: { span: 3 } };

const WaveHeight = () => {
  const [form] = Form.useForm();
  // const methods = useForm<Inputs>({
  //   defaultValues: {
  //     designWaterLevel: 3.21,
  //     waveHeight: 3.2,
  //     averageWavePeriod: 9.0,
  //     bottomElevationFrontBerth: -11.5,
  //     roundSinglPierWaveDir: 45.0,
  //     singleRowInterval: 30,
  //     singleRowDiameter: 12,
  //     puesdoRoundSinglePierWaveDir: 10,
  //     puesdoSingleRowInterval: 35,
  //     puesdoSingleRowDiameter: 15,
  //   },
  //   resolver: yupResolver(schema),
  // });

  const initialInputValues: Inputs = {
    designWaterLevel: 3.21,
    waveHeight: 3.2,
    averageWavePeriod: 9.0,
    bottomElevationFrontBerth: -11.5,
    roundSinglPierWaveDir: 45.0,
    singleRowInterval: 30,
    singleRowDiameter: 12,
    puesdoRoundSinglePierWaveDir: 10,
    puesdoSingleRowInterval: 35,
    puesdoSingleRowDiameter: 15,
  };
  const [result, setResult] = useState<ResultType | null>(null);

  const [hasError, setHasError] = useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setHasError(false);
  };

  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const onValueChanged = (data: Inputs) => {
    console.log(data);
  };

  const onFinish = (data: Inputs) => {
    console.log(data);
    try {
      const d = data.designWaterLevel - data.bottomElevationFrontBerth;
      const waveLength: number = calWaveLength(data.averageWavePeriod, d);

      let result: ResultType = {
        waveLength: 0,
        isDeepWave: false,
        waveExceedHeight: 0,
        roundSinglePierParam: {
          crestHeightRegular: 0.652,
          crestHeightIrregular: 0.717,
          maxCrestHRegular: 0,
          maxCrestHIrregular: 0,
        },
        roundRowPierParam: {
          singlePierMaxCrestHR: 0,
          singlePierMaxCrestHIr: 0,
          doublePierMaxCrestHR: 0,
          doublePierMaxCrestHIr: 0,
        },
        puesdoSinglePierParam: {
          crestHeightRegular: 0,
          crestHeightIrregular: 0,
          maxCrestHRegular: 0,
          maxCrestHIrregular: 0,
        },
        puesdoSingleRowPierParam: {
          maxCrestHRegular: 0,
          maxCrestHIrregular: 0,
        },
      };
      result.waveLength = waveLength;
      result.isDeepWave = d < waveLength / 2;
      result.waveExceedHeight = calExceedWaveHeight(
        data.waveHeight,
        waveLength,
        d
      );
      // result.roundSinglePierParam.maxCrestHRegular =
      //   result.roundSinglePierParam.crestHeightRegular *
      //   (data.waveHeight + result.waveExceedHeight);
      // result.roundSinglePierParam.maxCrestHIrregular =
      //   result.roundSinglePierParam.crestHeightIrregular *
      //   (data.waveHeight + result.waveExceedHeight);

      // result.roundRowPierParam.singlePierMaxCrestHR = calMaxWaveHeight(
      //   result.roundSinglePierParam.maxCrestHRegular,
      //   waveLength,
      //   data.singleRowInterval,
      //   data.singleRowDiameter,
      //   data.roundSinglPierWaveDir
      // );
      // result.roundRowPierParam.singlePierMaxCrestHIr = calMaxWaveHeight(
      //   result.roundSinglePierParam.maxCrestHIrregular,
      //   waveLength,
      //   data.singleRowInterval,
      //   data.singleRowDiameter,
      //   data.roundSinglPierWaveDir
      // );
      // result.roundRowPierParam.doublePierMaxCrestHR =
      //   1.25 * result.roundRowPierParam.singlePierMaxCrestHR;
      // result.roundRowPierParam.doublePierMaxCrestHIr =
      //   1.25 * result.roundRowPierParam.singlePierMaxCrestHIr;

      // result.puesdoSinglePierParam.crestHeightRegular =
      //   0.652 *
      //   (1.15 + ((1.35 - 1.15) * data.puesdoRoundSinglePierWaveDir) / 90);
      // result.puesdoSinglePierParam.crestHeightIrregular =
      //   1.1 * result.puesdoSinglePierParam.crestHeightRegular;

      // result.puesdoSinglePierParam.maxCrestHRegular =
      //   result.puesdoSinglePierParam.crestHeightRegular *
      //   (data.waveHeight + result.waveExceedHeight);
      // result.puesdoSinglePierParam.maxCrestHIrregular =
      //   result.puesdoSinglePierParam.crestHeightIrregular *
      //   (data.waveHeight + result.waveExceedHeight);

      // result.puesdoSingleRowPierParam.maxCrestHRegular = calMaxWaveHeight(
      //   result.puesdoSinglePierParam.maxCrestHRegular,
      //   waveLength,
      //   data.puesdoSingleRowInterval,
      //   data.puesdoSingleRowDiameter,
      //   data.puesdoRoundSinglePierWaveDir
      // );
      // result.puesdoSingleRowPierParam.maxCrestHIrregular = calMaxWaveHeight(
      //   result.puesdoSinglePierParam.maxCrestHIrregular,
      //   waveLength,
      //   data.puesdoSingleRowInterval,
      //   data.puesdoSingleRowDiameter,
      //   data.puesdoRoundSinglePierWaveDir
      // );

      setResult(result);
    } catch {
      setHasError(true);
    }
  };

  return (
    <>
      <Head>
        <title>重力墩波峰面高度</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MathJaxContext>
        <Form
          form={form}
          layout="horizontal"
          labelCol={{ span: 4 }}
          onFinish={onFinish}
          initialValues={initialInputValues}
          onValuesChange={onValueChanged}
        >
          <Form.Item
            {...formItemWrapCol}
            name="designWaterLevel"
            label="设计水位(DWL)"
            required
            tooltip={requireToolTip}
          >
            <InputNumber style={{ width: "100%" }} addonAfter="m" step="0.01" />
          </Form.Item>
          <Form.Item
            {...formItemWrapCol}
            name="waveHeight"
            label="入射波高(H)"
            required
            tooltip={requireToolTip}
          >
            <InputNumber addonAfter="m" step="0.01" />
          </Form.Item>
          <Form.Item
            {...formItemWrapCol}
            name="averageWavePeriod"
            label="入射波平均周期(T)"
            required
            tooltip={requireToolTip}
          >
            <InputNumber addonAfter="s" step="0.01" min="0" />
          </Form.Item>
          <Form.Item
            {...formItemWrapCol}
            name="bottomElevationFrontBerth"
            label="码头前沿设计底高程(dh)"
            required
            tooltip={requireToolTip}
          >
            <InputNumber addonAfter="m" step="0.01" />
          </Form.Item>
          <Form.Item label="码头前波长(H):" {...formItemWrapCol}>
            <Popover
              content={
                <MathJax>
                  {
                    "\\(L=\\frac{g\\overline{T}^{2}}{2\\pi}tanh\\frac{2 \\pi d}{L}\\)"
                  }
                </MathJax>
              }
              title="公式"
              trigger="focus"
            >
              <InputNumber
                addonAfter="m"
                readOnly
                value={result?.waveLength?.toFixed(2)}
              />
            </Popover>
          </Form.Item>
          <Form.Item label="深水波判断:" {...formItemWrapCol}>
            <Input
              onFocus={showDrawer}
              readOnly
              value={result?.isDeepWave ? "浅水波" : "深水波"}
            />
          </Form.Item>
          <Form.Item
            label={<MathJax>入射波超高({"\\(h_{s0}\\)"})</MathJax>}
            {...formItemWrapCol}
          >
            <InputNumber
              addonAfter="m"
              readOnly
              value={result?.waveExceedHeight?.toFixed(2)}
            />
          </Form.Item>
          <Form.Item wrapperCol={{ span: "4", offset: "4" }}>
            <Button type="primary" htmlType="submit">
              计算
            </Button>
          </Form.Item>
        </Form>
        <Drawer
          title="详细说明"
          placement="right"
          onClose={onClose}
          visible={visible}
        >
          <p>浅水波需满足条件: </p>

          <MathJax>{"\\(d<\\frac{L}{2}\\)"}</MathJax>
        </Drawer>
      </MathJaxContext>
      {/* <FormProvider {...methods}>
        <form>
          <Grid container rowSpacing={1} spacing={2}>
            <Grid item xs={12}>
              <Card>
                <CardHeader
                  title="基本参数"
                  sx={{
                    backgroundColor: "primary.main",
                    color: "white",
                    height: "3rem",
                  }}
                ></CardHeader>
                <CardContent>
                  <Grid container rowSpacing={1} spacing={1} direction="row">
                    <Grid item xs={12} md={3}>
                      <RHookFormTextFieldContainer
                        label="设计水位(DWL)"
                        name="designWaterLevel"
                        endAdorn="m"
                        defaultValue={3.21}
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <RHookFormTextFieldContainer
                        label="入射波高(H)"
                        name="waveHeight"
                        endAdorn="m"
                        defaultValue={3.2}
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <RHookFormTextFieldContainer
                        label="入射波平均周期	(T)"
                        name="averageWavePeriod"
                        endAdorn="s"
                        defaultValue={9.0}
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <RHookFormTextFieldContainer
                        label="码头前沿设计底高程	(dh)"
                        name="bottomElevationFrontBerth"
                        endAdorn="m"
                        defaultValue={-11.5}
                      />
                    </Grid>
                    <Grid
                      xs={12}
                      md={3}
                      container
                      item
                      justifyContent={{ xs: "center", md: "flex-start" }}
                    >
                      码头前波长(H): {result?.waveLength?.toFixed(2)}m
                    </Grid>
                    <Grid
                      xs={12}
                      md={3}
                      container
                      item
                      justifyContent={{ xs: "center", md: "flex-start" }}
                    >
                      深水波判断: {result?.isDeepWave ? "浅水波" : "深水波"}
                    </Grid>
                    <Grid
                      xs={12}
                      md={3}
                      container
                      item
                      justifyContent={{ xs: "center", md: "flex-start" }}
                    >
                      入射波超高(hs0): {result?.waveExceedHeight?.toFixed(2)}m
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} xl={3} height={30}>
              <Card>
                <CardHeader
                  title="圆型单墩"
                  sx={{
                    backgroundColor: "primary.main",
                    color: "white",
                    height: "3rem",
                  }}
                ></CardHeader>
                <CardContent>
                  <Stack spacing={2} height={300}>
                    <RHookFormTextFieldContainer
                      label="波浪入射角(θ)"
                      name="roundSinglPierWaveDir"
                      endAdorn="°"
                      defaultValue={45.0}
                    />
                    <h3>波峰面高度参数</h3>
                    <div>
                      规则波:
                      {result?.roundSinglePierParam.crestHeightRegular}{" "}
                      不规则波:
                      {result?.roundSinglePierParam.crestHeightIrregular}
                    </div>
                    <h3>最大波峰面高度</h3>
                    <div>
                      规则波:
                      {result?.roundSinglePierParam.maxCrestHRegular.toFixed(
                        2
                      )}{" "}
                      不规则波:
                      {result?.roundSinglePierParam.maxCrestHIrregular.toFixed(
                        2
                      )}
                    </div>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} xl={3}>
              <Card>
                <CardHeader
                  title="成排圆墩"
                  sx={{
                    backgroundColor: "primary.main",
                    color: "white",
                    height: "3rem",
                  }}
                ></CardHeader>
                <CardContent>
                  <Stack spacing={2} height={300}>
                    <RHookFormTextFieldContainer
                      label="墩轴线间距(B)"
                      name="singleRowInterval"
                      endAdorn="m"
                      defaultValue={30}
                    />
                    <RHookFormTextFieldContainer
                      label="墩轴线间距(D)"
                      name="singleRowDiameter"
                      endAdorn="m"
                      defaultValue={12}
                    />
                    <h3>单排圆墩:最大波峰面高度</h3>
                    <div>
                      规则波:
                      {result?.roundRowPierParam.singlePierMaxCrestHR.toFixed(
                        2
                      )}{" "}
                      不规则波:
                      {result?.roundRowPierParam.singlePierMaxCrestHIr.toFixed(
                        2
                      )}
                    </div>
                    <h3>双排圆墩:最大波峰面高度</h3>
                    <div>
                      规则波:
                      {result?.roundRowPierParam.doublePierMaxCrestHR.toFixed(
                        2
                      )}{" "}
                      不规则波:
                      {result?.roundRowPierParam.doublePierMaxCrestHIr.toFixed(
                        2
                      )}
                    </div>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} xl={3}>
              <Card>
                <CardHeader
                  title="准椭圆单墩"
                  sx={{
                    backgroundColor: "primary.main",
                    color: "white",
                    height: "3rem",
                  }}
                ></CardHeader>
                <CardContent>
                  <Stack spacing={2} height={300}>
                    <RHookFormTextFieldContainer
                      label="波浪入射角(θ)"
                      name="puesdoRoundSinglePierWaveDir"
                      endAdorn="°"
                      defaultValue={45.0}
                    />
                    <h3>波峰面高度参数</h3>
                    <div>
                      规则波:
                      {result?.puesdoSinglePierParam.crestHeightRegular.toFixed(
                        2
                      )}{" "}
                      不规则波:
                      {result?.puesdoSinglePierParam.crestHeightIrregular.toFixed(
                        2
                      )}
                    </div>
                    <h3>最大波峰面高度</h3>
                    <div>
                      规则波:
                      {result?.puesdoSinglePierParam.maxCrestHRegular.toFixed(
                        2
                      )}{" "}
                      不规则波:
                      {result?.puesdoSinglePierParam.maxCrestHIrregular.toFixed(
                        2
                      )}
                    </div>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} xl={3}>
              <Card>
                <CardHeader
                  title="单排准椭圆墩"
                  sx={{
                    backgroundColor: "primary.main",
                    color: "white",
                    height: "3rem",
                  }}
                ></CardHeader>
                <CardContent>
                  <Stack spacing={2} height={300}>
                    <RHookFormTextFieldContainer
                      label="墩轴线间距(B)"
                      name="puesdoSingleRowInterval"
                      endAdorn="m"
                      defaultValue={30}
                    />
                    <RHookFormTextFieldContainer
                      label="墩轴线间距(D)"
                      name="puesdoSingleRowDiameter"
                      endAdorn="m"
                      defaultValue={12}
                    />
                    <h3>最大波峰面高度</h3>
                    <div>
                      规则波:
                      {result?.puesdoSingleRowPierParam.maxCrestHRegular.toFixed(
                        2
                      )}{" "}
                      不规则波:
                      {result?.puesdoSingleRowPierParam.maxCrestHIrregular.toFixed(
                        2
                      )}
                    </div>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            <Grid
              item
              xs={12}
              container
              justifyItems="center"
              justifyContent="center"
            >
              <Button
                style={{
                  width: "10rem",
                  marginTop: "2rem",
                  background: "#adbd37",
                }}
                variant="contained"
                onClick={methods.handleSubmit(onSubmit)}
              >
                计算
              </Button>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
      <Snackbar
        open={hasError}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          输如参数错误,请重新输入
        </Alert>
      </Snackbar> */}
    </>
  );
};

export default WaveHeight;
