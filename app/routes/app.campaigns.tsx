import { Button, InlineGrid, Layout, LegacyCard, Page, Text, Tabs } from "@shopify/polaris";
import React, { useCallback, useState } from "react";
import { tabs } from "../utils/tabs";

type props = {};

const CampaingsPage = (props: Props) => {

    const [ selected, setSelected ] = useState(0);

    const handleTabChange = useCallback((selectedTabIndex: number) => setSelected(selectedTabIndex), []);

    return <Page>
        <Layout>
            <Layout.Section>
                <InlineGrid columns={2}>
                    <Text variant="heading2xl" as="h2">Campaings</Text>
                    <Button>Create New</Button>
                </InlineGrid>
            </Layout.Section>
            <Layout.Section>
                <LegacyCard>
                    <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
                        <LegacyCard.Section title={tabs[selected].content}>
                            {tabs[selected].component}
                        </LegacyCard.Section>
                    </Tabs>
                </LegacyCard>
            </Layout.Section>
        </Layout>
    </Page>;
};

export default CampaingsPage;