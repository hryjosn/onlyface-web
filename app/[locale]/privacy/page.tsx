import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { ContentLayout } from "../../../components/ui/content-layout";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Privacy" });
  return {
    title: t("title"),
  };
}

const PrivacyPolicy = () => {
  const t = useTranslations("Privacy");

  return (
    <ContentLayout subtitle={t("lastUpdated")} title={t("title")}>
      <p>{t("intro")}</p>

      <h2>{t("interpretation")}</h2>
      <h3>{t("interpretationH3")}</h3>
      <p>{t("interpretationDesc")}</p>

      <h3>{t("definitions")}</h3>
      <p>{t("definitionsIntro")}</p>
      <ul>
        <li>
          <strong>{t("account").split("means")[0]}</strong> means{" "}
          {t("account").split("means")[1]}
        </li>
        <li>
          <strong>{t("affiliate").split("means")[0]}</strong> means{" "}
          {t("affiliate").split("means")[1]}
        </li>
        <li>
          <strong>{t("application").split("refers to")[0]}</strong> refers to{" "}
          {t("application").split("refers to")[1]}
        </li>
        <li>
          <strong>{t("company").split("refers to")[0]}</strong> refers to{" "}
          {t("company").split("refers to")[1]}
        </li>
        <li>
          <strong>{t("country").split("refers to:")[0]}</strong> refers to:{" "}
          {t("country").split("refers to:")[1]}
        </li>
        <li>
          <strong>{t("device").split("means")[0]}</strong> means{" "}
          {t("device").split("means")[1]}
        </li>
        <li>
          <strong>{t("personalData").split("is")[0]}</strong> is{" "}
          {t("personalData").split("is")[1]}
        </li>
        <li>
          <strong>{t("service").split("refers to")[0]}</strong> refers to{" "}
          {t("service").split("refers to")[1]}
        </li>
        <li>
          <strong>{t("usageData").split("refers to")[0]}</strong> refers to{" "}
          {t("usageData").split("refers to")[1]}
        </li>
      </ul>

      <h2>{t("collecting")}</h2>
      <h3>{t("dataTypes")}</h3>
      <h4>{t("personalDataTitle")}</h4>
      <p>{t("personalDataIntro")}</p>
      <ul>
        <li>{t("email")}</li>
        <li>{t("name")}</li>
        <li>{t("phone")}</li>
        <li>{t("usageDataTitle")}</li>
      </ul>

      <h3>{t("useOfData")}</h3>
      <p>{t("useOfDataIntro")}</p>
      <ul>
        <li>
          <strong>{t("provideMaintain")}</strong>
        </li>
        <li>
          <strong>{t("manageAccount")}</strong>
        </li>
        <li>
          <strong>{t("performanceContract")}</strong>
        </li>
        <li>
          <strong>{t("contactYou")}</strong>
        </li>
        <li>
          <strong>{t("manageRequests")}</strong>
        </li>
      </ul>

      <h2>{t("security")}</h2>
      <p>{t("securityDesc")}</p>

      <h2>{t("contact")}</h2>
      <p>{t("contactDesc")}</p>
      <ul>
        <li>{t("byEmail")}</li>
      </ul>
    </ContentLayout>
  );
};

export default PrivacyPolicy;
