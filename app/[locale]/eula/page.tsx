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
  const t = await getTranslations({ locale, namespace: "EULA" });
  return {
    title: t("title"),
  };
}

const EULA = () => {
  const t = useTranslations("EULA");

  return (
    <ContentLayout subtitle={t("lastUpdated")} title={t("title")}>
      <p>{t("intro")}</p>

      <h2>{t("licenseGrant")}</h2>
      <p>{t("licenseGrantDesc")}</p>

      <h2>{t("restrictions")}</h2>
      <p>{t("restrictionsIntro")}</p>
      <ul>
        <li>{t("restrict1")}</li>
        <li>{t("restrict2")}</li>
        <li>{t("restrict3")}</li>
      </ul>

      <h2>{t("property")}</h2>
      <p>{t("propertyDesc")}</p>

      <h2>{t("content")}</h2>
      <p>{t("contentDesc")}</p>

      <h2>{t("termination")}</h2>
      <p>{t("terminationDesc")}</p>

      <h2>{t("liability")}</h2>
      <p>{t("liabilityDesc")}</p>

      <h2>{t("law")}</h2>
      <p>{t("lawDesc")}</p>

      <h2>{t("contact")}</h2>
      <p>{t("contactDesc")}</p>
    </ContentLayout>
  );
};

export default EULA;
