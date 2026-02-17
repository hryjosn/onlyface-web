import type { Metadata } from 'next';
import { ContentLayout } from "../../components/ui/content-layout";
import { benefitOne, benefitTwo, benefitThree, benefitFour } from "../../components/data";
import Benefits from "../../components/benefits";

export const metadata: Metadata = {
  title: 'How to Delete My Account',
  description: 'Step-by-step guide on how to delete your Onlyface account.',
};

const DeleteAccountTutorial = () => {
  return (
    <ContentLayout title="How to delete my account?" subtitle="Follow the steps below to complete the account deletion process.">
      <div className="space-y-0 -mt-10">
        <Benefits data={benefitOne} />
        <Benefits imgPos="right" data={benefitTwo} />
        <Benefits data={benefitThree} />
        <Benefits imgPos="right" data={benefitFour} />
      </div>
      
      <div className="mt-12 p-8 bg-muted rounded-2xl border border-border">
        <h2 className="mt-0">Need more help?</h2>
        <p className="mb-0">
          If you encounter any issues during the deletion process, please contact our support team at support@onlyface.app. We are here to help you.
        </p>
      </div>
    </ContentLayout>
  );
};

export default DeleteAccountTutorial;
