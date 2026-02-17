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
  const t = await getTranslations({ locale, namespace: "Safety" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

function CSAEPreventionPolicies() {
  const t = useTranslations("Safety");

  return (
    <ContentLayout subtitle={t("subtitle")} title={t("title")}>
      <h2>{t("introTitle")}</h2>
      <p>{t("introDesc")}</p>

      <h2>{t("prohibitedTitle")}</h2>
      <p>{t("prohibitedIntro")}</p>
      <ul>
        <li>{t("prohibited1")}</li>
        <li>{t("prohibited2")}</li>
        <li>{t("prohibited3")}</li>
        <li>{t("prohibited4")}</li>
        <li>{t("prohibited5")}</li>
      </ul>

      <h2>{t("measuresTitle")}</h2>
      <ol>
        <li>
          <strong>{t("measure1Title")}</strong>: {t("measure1Desc")}
        </li>
        <li>
          <strong>{t("measure2Title")}</strong>: {t("measure2Desc")}
        </li>
        <li>
          <strong>{t("measure3Title")}</strong>: {t("measure3Desc")}
        </li>
        <li>
          <strong>{t("measure4Title")}</strong>: {t("measure4Desc")}
        </li>
        <li>
          <strong>{t("measure5Title")}</strong>: {t("measure5Desc")}
        </li>
        <li>
          <strong>{t("measure6Title")}</strong>: {t("measure6Desc")}
        </li>
      </ol>

      <h2>{t("enforcementTitle")}</h2>
      <ul>
        <li>
          <strong>{t("enforcement1Title")}</strong>: {t("enforcement1Desc")}
        </li>
        <li>
          <strong>{t("enforcement2Title")}</strong>: {t("enforcement2Desc")}
        </li>
        <li>
          <strong>{t("enforcement3Title")}</strong>: {t("enforcement3Desc")}
        </li>
        <li>
          <strong>{t("enforcement4Title")}</strong>: {t("enforcement4Desc")}
        </li>
      </ul>

      <h2>{t("contactTitle")}</h2>
      <p>{t("contactDesc")}</p>
    </ContentLayout>
  );
}

export default CSAEPreventionPolicies;
