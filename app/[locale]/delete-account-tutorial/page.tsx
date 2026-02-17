import type { Metadata } from "next";
import Benefits from "../../../components/benefits";
import {
  benefitFour,
  benefitOne,
  benefitThree,
  benefitTwo,
} from "../../../components/data";
import { ContentLayout } from "../../../components/ui/content-layout";

export const metadata: Metadata = {
  title: "How to Delete My Account",
  description: "Step-by-step guide on how to delete your Onlyface account.",
};

const DeleteAccountTutorial = () => {
  return (
    <ContentLayout
      subtitle="Follow the steps below to complete the account deletion process."
      title="How to delete my account?"
    >
      <div className="-mt-10 space-y-0">
        <Benefits data={benefitOne} />
        <Benefits data={benefitTwo} imgPos="right" />
        <Benefits data={benefitThree} />
        <Benefits data={benefitFour} imgPos="right" />
      </div>

      <div className="mt-12 rounded-2xl border border-border bg-muted p-8">
        <h2 className="mt-0">Need more help?</h2>
        <p className="mb-0">
          If you encounter any issues during the deletion process, please
          contact our support team at support@onlyface.app. We are here to help
          you.
        </p>
      </div>
    </ContentLayout>
  );
};

export default DeleteAccountTutorial;
