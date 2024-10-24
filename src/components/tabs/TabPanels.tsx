import React, { ReactElement } from "react";
import TabPanel from "./TabPanel";
import { TabListOption } from '@/types';

export type TabPanelsProps = {
	children: ReactElement<typeof TabPanel>[];
	tabs: TabListOption[];
}

// Should not be used directly, but through Tabs component.
const TabPanels = ({
	children,
	tabs
}: TabPanelsProps) => {

	return (
		<div>
			{tabs.map((tab, index) =>
				tab.current && React.isValidElement(children[index])
					? children[index]
					: null
			)}
		</div>
	)
}

export default TabPanels;