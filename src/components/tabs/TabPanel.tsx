import React from "react";

type TabPanelProps = {
    children?: React.ReactNode;
}

const TabPanel = ({
    children
}: TabPanelProps) => {
    return (
        <div>{children}</div>
    )
}

export default TabPanel;