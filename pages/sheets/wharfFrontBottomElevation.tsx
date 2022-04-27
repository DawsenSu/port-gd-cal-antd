import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

const WharfFrontBottomElevation = () => {
  const { t } = useTranslation();

  return (
    <div>
      <p>{t("averageWavePeriodInfrontWharf", { ns: "topEle" })}</p>
    </div>
  );
};

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "default", "topEle"])),
  },
});

export default WharfFrontBottomElevation;
