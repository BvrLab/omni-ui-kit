import type { Meta, StoryObj } from '@storybook/react';
import React from 'react'
import Tabs from './Tabs';
import TabPanel from './TabPanel';
import { BuildingOfficeIcon, CreditCardIcon, UserIcon, UsersIcon } from '@heroicons/react/20/solid'

const meta = {
    title: 'Navigation/Tabs',
    component: Tabs,
    tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

const tabs = [
    { name: 'My Account', icon: UserIcon },
    { name: 'Company', icon: BuildingOfficeIcon },
    { name: 'Team Members', icon: UsersIcon },
    { name: 'Billing', icon: CreditCardIcon },
]

export const Default: Story = {
    args: {
        colorScheme: 'indigo',
        tabsList: tabs,
        defaultTabIndex: 3,
        children: [
            <TabPanel key="my-account"><h1 className='pt-3'>My Account</h1></TabPanel>,
            <TabPanel key="company"><h1 className='pt-3'>Company</h1></TabPanel>,
            <TabPanel key="team-members"><h1 className='pt-3'>Team Members</h1></TabPanel>,
            <TabPanel key="billing"><h1 className='pt-3'>Billing</h1></TabPanel>,
        ]
    },
    render: (args: any) => (
        <>
            <Tabs {...args}>
            </Tabs>
        </>
    ),
};

export const PinkColorSchemeWithoutSetingDefaultTab: Story = {
    args: {
        colorScheme: 'pink',
        tabsList: tabs,
        children: [
            <TabPanel key="my-account"><h1 className='pt-3'>My Account</h1></TabPanel>,
            <TabPanel key="company"><h1 className='pt-3'>Company</h1></TabPanel>,
            <TabPanel key="team-members"><h1 className='pt-3'>Team Members</h1></TabPanel>,
            <TabPanel key="billing"><h1 className='pt-3'>Billing</h1></TabPanel>,
        ]
    },
    render: (args: any) => (
        <>
            <Tabs {...args}>
            </Tabs>
        </>
    ),
};