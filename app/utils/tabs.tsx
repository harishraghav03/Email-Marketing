import TestComponent from "app/components/Test";

export const tabs = [
    {
        id: "all-customers",
        content: "All",
        panelId: "all-customers-content-one",
        component: <TestComponent/>
    },
    {
        id: 'accepts-marketing-1',
        content: 'Ongoing',
        panelId: 'accepts-marketing-content-1'
    },
    {
        id: "repeat-customers-1",
        content: 'Draft',
        panelId: 'repeat-customers-content-1'
    },
    {
        id: 'prospects-1',
        content: 'Completed',
        panelId: 'prospects-content-1'
    }
]