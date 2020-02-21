import React from "react";
import { i18n, useTranslation } from "./../i18n";

const Page = () => {
  const { t } = useTranslation();
  return (
    <>
      <div>{t("hello.world")}</div>
      {["fr", "en"].map((locale, i) => (
        <button
          key={`locale.${i}`}
          style={{ background: locale === i18n.language ? "red" : "none" }}
          onClick={i18n.changeLanguage.bind(this, locale)}
        >
          {locale}
        </button>
      ))}
    </>
  );
};

export default Page;
