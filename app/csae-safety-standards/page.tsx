import React from 'react';
import type { Metadata } from 'next';
import { ContentLayout } from "../../components/ui/content-layout";

export const metadata: Metadata = {
  title: 'CSAE Prevention Policies',
  description: 'Our application is dedicated to preventing Child Sexual Abuse and Exploitation (CSAE).',
};

function CSAEPreventionPolicies() {
  return (
    <ContentLayout title="CSAE Prevention Policies" subtitle="Our commitment to safety and protection.">
      <h2>Introduction</h2>
      <p>
        Our application is dedicated to preventing Child Sexual Abuse and Exploitation (CSAE). We enforce strict policies and employ advanced measures to ensure a safe environment for all users.
      </p>

      <h2>Prohibited Activities</h2>
      <p>We strictly prohibit the following activities:</p>
      <ul>
        <li>Any form of child sexual abuse material (CSAM)</li>
        <li>Grooming or coercing minors into inappropriate activities</li>
        <li>Sextortion or blackmailing minors</li>
        <li>Any attempt to facilitate or promote child trafficking</li>
        <li>Sharing or distributing exploitative content involving minors</li>
      </ul>

      <h2>Prevention Measures</h2>
      <ol>
        <li>
          <strong>Content Moderation</strong>: Our AI-powered and human review systems actively scan and remove CSAE-related content.
        </li>
        <li>
          <strong>User Verification</strong>: Identity verification processes help prevent the creation of fake accounts used for illicit activities.
        </li>
        <li>
          <strong>Age Restrictions</strong>: Minors are restricted from accessing adult content, and age verification steps are enforced.
        </li>
        <li>
          <strong>Real-Time Monitoring</strong>: We implement automated monitoring tools to detect and flag suspicious activities.
        </li>
        <li>
          <strong>Strict Reporting System</strong>: Users can report suspicious behavior through our in-app reporting system.
        </li>
        <li>
          <strong>Parental Controls</strong>: We provide parents with tools to monitor and restrict their child's activities on the platform.
        </li>
      </ol>

      <h2>Reporting and Enforcement</h2>
      <ul>
        <li><strong>Immediate Action</strong>: Reported CSAE violations are reviewed and acted upon immediately.</li>
        <li><strong>Collaboration with Authorities</strong>: We work closely with law enforcement agencies and child protection organizations.</li>
        <li><strong>Permanent Account Bans</strong>: Users found violating CSAE policies will face an irreversible account ban.</li>
        <li><strong>Legal Action</strong>: We take legal measures against individuals involved in CSAE activities.</li>
      </ul>

      <h2>Contact and Support</h2>
      <p>
        If you encounter any CSAE-related content or suspicious activity, please report it through our in-app reporting feature or contact our support team at support@onlyface.app.
      </p>
    </ContentLayout>
  );
}

export default CSAEPreventionPolicies;