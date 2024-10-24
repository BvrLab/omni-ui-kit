import NotificationContainer from '@/components/notifications/NotificationContainer'
import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import Button from '@/components/buttons/Button'
import Notifications, {
    NotificationActionPanel,
} from '@/components/notifications/Notifications'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import FlexItem from '@/components/containers/flexbox/FlexItem'

const meta = {
    title: 'Overlay/Notifications',
    component: Notifications,
    argTypes: {},
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Notifications>

export default meta

type Story = StoryObj<typeof meta>

const render = (args: any) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [show, setShow] = useState(true)
    return (
        <>
            <Button onClick={() => setShow(true)}>Show Notification</Button>
            <Notifications {...args} show={show} setShow={setShow}>
                <NotificationActionPanel>
                    <Button variant={'primary'} size={'xs'} onClick={() => {}}>
                        Primary
                    </Button>
                    <Button variant={'secondary'} size={'xs'}>
                        Cancel
                    </Button>
                </NotificationActionPanel>
            </Notifications>
        </>
    )
}

export const WithActionPanel: Story = {
    args: {
        show: false,
        setShow: () => {},
        title: 'NotificationContainer Title',
    },
    render,
}

export const WithIconAndDescription: Story = {
    args: {
        show: false,
        setShow: () => {},
        title: 'NotificationContainer Title',
        icon: (
            <CheckCircleIcon
                className="h-6 w-6 text-green-400"
                aria-hidden="true"
            />
        ),
        description: 'This is the description texts',
    },
    render,
}
