import type { ActionFunction } from "@remix-run/node";
import {
  Form,
  json,
  useActionData,
  useLoaderData,
  useSubmit,
} from "@remix-run/react";
import { Button, Layout, Page, TextField } from "@shopify/polaris";
import VercelInviteUserEmail from "app/emails/customEmail";
import MONTHLY_PLAN, { authenticate } from "app/shopify.server";
import React, { useCallback, useState } from "react";

export const action: ActionFunction = async ({ request }) => {
  const { admin, session } = await authenticate.admin(request);
  const res = await admin.rest.resources.Webhook.delete({
    session: session,
    id: 1266162303130,
  });

  if (res) {
    console.log("deleted successfully");
    return json({ res }, { status: 200 });
  }
  return null;
};

export const loader = async ({ request }: any) => {
  const { billing } = await authenticate.admin(request);
  await billing.require({
    plans: [MONTHLY_PLAN],
    isTest: true,
    onFailure: async () =>
      billing.request({
        plan: MONTHLY_PLAN,
        isTest: true,
      }),
  });
  return null;
};

const AtomationsPage: React.FC = () => {
  const data: any = useLoaderData();
  const [value, setValue] = useState("default");

  const handleChangeText = useCallback((newValue: string) => setValue(newValue), []);
  const submit = useSubmit();
  const actionData = useActionData<typeof action>();

  const sendAutomation = () => submit({}, { replace: true, method: "POST" });

  return (
    <Page>
      <Form onSubmit={sendAutomation} method="post" action="/app/automations">
        <h1>CREATE AUTOMATION (AUTOMATIC EMAIL SEND AFTER USER SIGN UP)</h1>
        <Layout>
          <Layout.Section>
            <TextField label="Automation Name" value={value} onChange={handleChangeText} autoComplete="off" />
            <TextField label="To" value={value} onChange={handleChangeText} autoComplete="off" />
            <TextField label="Corporation" value={value} onChange={handleChangeText} autoComplete="off" />
            <TextField label="From" value={value} onChange={handleChangeText} autoComplete="off" />
            <TextField label="Email Subject" value={value} onChange={handleChangeText} autoComplete="off" />
            <TextField label="Content" value={value} onChange={handleChangeText} autoComplete="off" />
            <Button submit>send</Button>
          </Layout.Section>
          <Layout.Section>
            <VercelInviteUserEmail />
          </Layout.Section>
        </Layout>
      </Form>
    </Page>
  );
};

export default AtomationsPage;