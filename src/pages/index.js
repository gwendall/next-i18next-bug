import React from "react";
import { appWithTranslation, useTranslation } from "./../i18n";

const Page = () => {
  const { t } = useTranslation();
  return <div>{t("hello.world")}</div>;
};

export default Page;
