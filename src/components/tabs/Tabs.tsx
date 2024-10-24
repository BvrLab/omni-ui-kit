
import React, { ReactElement, useState } from 'react';
import TabList from './TabList';
import TabPanels from './TabPanels';
import { TabListOption } from '@/types';
import TabPanel from './TabPanel';
import { ColorScheme } from '../constant';

interface TabsProps {
    children: ReactElement<typeof TabPanel>[];
    tabsList: TabListOption[];
    defaultTabIndex?: number;
    colorScheme?: ColorScheme
}


const Tabs = ({
    children,
    tabsList,
    defaultTabIndex = 0,
    colorScheme = 'indigo'
} : TabsProps) => {

    //prepare tabs default state, if defaultTabIndex set to index, set current to true
    const [tabs, setTabs] = useState<TabListOption[]>(tabsList.map((tab, index) => {
        if (index === defaultTabIndex) {
            return { ...tab, current: true };
        } else {
            return { ...tab, current: false };
        }
    }));

    return (
        <div>
            <TabList tabs={tabs} setTabs={setTabs} colorScheme={colorScheme} />
            <TabPanels tabs={tabs}>
                {children}
            </TabPanels>
        </div>
    );
};

export default Tabs;