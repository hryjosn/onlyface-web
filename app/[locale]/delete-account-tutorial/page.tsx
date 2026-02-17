import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Benefits from "../../../components/benefits";
import {
  benefitFour,
  benefitOne,
  benefitThree,
  benefitTwo,
} from "../../../components/data";
import { ContentLayout } from "../../../components/ui/content-layout";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "DeleteAccount" });
  return {
    title: t("metaTitle"),
    description: t("metaDesc"),
  };
}

const DeleteAccountTutorial = () => {
  const t = useTranslations("DeleteAccount");

  return (
    <ContentLayout subtitle={t("subtitle")} title={t("title")}>
      <div className="-mt-10 space-y-0">
        <Benefits
          data={{
            ...benefitOne,
            title: t("step1.title"),
            desc: t("step1.desc"),
          }}
        />
        <Benefits
          data={{
            ...benefitTwo,
            title: t("step2.title"),
            desc: t("step2.desc"),
          }}
          imgPos="right"
        />
        <Benefits
          data={{
            ...benefitThree,
            title: t("step3.title"),
            desc: t("step3.desc"),
          }}
        />
        <Benefits
          data={{
            ...benefitFour,
            title: t("step4.title"),
            desc: t("step4.desc"),
          }}
          imgPos="right"
        />
      </div>

      <div className="mt-12 rounded-2xl border border-border bg-muted p-8">
        <h2 className="mt-0">{t("helpTitle")}</h2>
        <p className="mb-0">{t("helpDesc")}</p>
      </div>
    </ContentLayout>
  );
};

export default DeleteAccountTutorial;
