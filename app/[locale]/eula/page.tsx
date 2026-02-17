import type { Metadata } from "next";
import { ContentLayout } from "../../../components/ui/content-layout";

export const metadata: Metadata = {
  title: "End User License Agreement",
  description: "End User License Agreement for Onlyface.",
};

const EULA = () => {
  return (
    <ContentLayout
      subtitle="Last updated: October 20, 2023"
      title="End User License Agreement"
    >
      <p>
        This End User License Agreement ("Agreement") is a legal agreement
        between you and Onlyface ("Company", "we", "us", or "our").
      </p>

      <h2>1. License Grant</h2>
      <p>
        Subject to the terms of this Agreement, the Company grants you a
        personal, non-exclusive, non-transferable, non-sublicensable, revocable
        license to download, install and use the Application on devices owned or
        controlled by you.
      </p>

      <h2>2. Restrictions</h2>
      <p>You agree not to, and you will not permit others to:</p>
      <ul>
        <li>
          License, sell, rent, lease, assign, distribute, transmit, host,
          outsource, disclose or otherwise commercially exploit the Application.
        </li>
        <li>
          Modify, make derivative works of, disassemble, decrypt, reverse
          compile or reverse engineer any part of the Application.
        </li>
        <li>
          Remove, alter or obscure any proprietary notice (including any notice
          of copyright or trademark) of the Company or its affiliates, partners,
          suppliers or the licensors of the Application.
        </li>
      </ul>

      <h2>3. Intellectual Property</h2>
      <p>
        The Application, including without limitation all copyrights, patents,
        trademarks, trade secrets and other intellectual property rights are,
        and shall remain, the sole and exclusive property of the Company.
      </p>

      <h2>4. Your Content</h2>
      <p>
        You are responsible for the content you post on Onlyface. You grant us a
        non-exclusive, royalty-free, transferable, sub-licensable, worldwide
        license to use, display, reproduce, and distribute your content in
        connection with the Application.
      </p>

      <h2>5. Termination</h2>
      <p>
        This Agreement shall remain in effect until terminated by you or the
        Company. The Company may, in its sole discretion, at any time and for
        any or no reason, suspend or terminate this Agreement with or without
        prior notice.
      </p>

      <h2>6. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by applicable law, in no event shall the
        Company or its suppliers be liable for any special, incidental,
        indirect, or consequential damages whatsoever.
      </p>

      <h2>7. Governing Law</h2>
      <p>
        The laws of Taiwan, excluding its conflicts of law rules, shall govern
        this Agreement and your use of the Application.
      </p>

      <h2>8. Contact Information</h2>
      <p>
        If you have any questions about this Agreement, please contact us at
        support@onlyface.app.
      </p>
    </ContentLayout>
  );
};

export default EULA;
