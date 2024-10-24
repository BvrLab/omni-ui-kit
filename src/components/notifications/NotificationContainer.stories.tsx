import NotificationContainer from '@/components/notifications/NotificationContainer'
import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import Button from '@/components/buttons/Button'

const meta = {
    title: 'Overlay/Notifications',
    component: NotificationContainer,
    argTypes: {},
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof NotificationContainer>

export default meta

type Story = StoryObj<typeof meta>

const render = (args: any) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [show, setShow] = useState(true)
    return (
        <>
            <Button onClick={() => setShow(!show)}>Toggle Notification</Button>
            <NotificationContainer {...args} show={show} />
        </>
    )
}

export const Container: Story = {
    args: {
        show: false,
    },
    render,
}
