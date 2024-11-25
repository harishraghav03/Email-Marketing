import { Page, Frame, Modal, Button, Layout, TextField } from "@shopify/polaris";
import React, { useCallback, useState } from "react";

type Props = {};

const CreateCampaignForm = (props: Props) => {
    const [activate, setActivate] = useState(true);
    const handleChange = useCallback(() => setActivate(!activate), [activate]);

    const activator = <Button onClick={handleChange}>Open</Button>;

    const [value, setValue] = useState("");

    const handleChangeText = useCallback(
        (newValue: string) => setValue(newValue),
        []
    );

    return (
        <Page>
            <Frame>
                <Modal
                    activator={activator}
                    open={activate}
                    onClose={handleChange}
                    title="Create a new Email Campaign"
                    primaryAction={{
                        content: "Send",
                        onAction: () => {},
                    }}
                    secondaryActions={{
                        content: "Finish Later",
                        onAction: () => {},
                    }}
                >
                    <Modal.Section>
                        <Layout>
                            <Layout.Section>
                                <TextField
                                    label="Campaign Name"
                                    value={value}
                                    onChange={handleChangeText}
                                    autoComplete="off"
                                />
                                <TextField
                                    label="Campaign Description"
                                    value={value}
                                    onChange={handleChangeText}
                                    autoComplete="off"
                                />
                                <TextField
                                    label="Target Audience"
                                    value={value}
                                    onChange={handleChangeText}
                                    autoComplete="off"
                                />
                                <TextField
                                    label="Campaign Budget"
                                    value={value}
                                    onChange={handleChangeText}
                                    autoComplete="off"
                                />
                                <TextField
                                    label="Schedule Date"
                                    value={value}
                                    onChange={handleChangeText}
                                    autoComplete="off"
                                />
                            </Layout.Section>
                        </Layout>
                    </Modal.Section>
                </Modal>
            </Frame>
        </Page>
    );
};

export default CreateCampaignForm;
