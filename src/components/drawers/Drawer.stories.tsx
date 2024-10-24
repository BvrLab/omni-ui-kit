import { Meta, StoryObj } from '@storybook/react'
import Drawer, { DrawerContent } from '@/components/drawers/Drawer'
import { useState } from 'react'
import Button from '@/components/buttons/Button'
import Flexbox from '@/components/containers/flexbox/Flexbox'

const meta = {
    title: 'Overlay/Drawer',
    component: Drawer,
    argTypes: {},
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Drawer>

export default meta

type Story = StoryObj<typeof meta>

const render = (args: any) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(true)

    return (
        <>
            <Button size={'lg'} onClick={() => setIsOpen(true)}>
                {' '}
                Open Drawer
            </Button>

            <Drawer {...args} isOpen={isOpen} setIsOpen={setIsOpen}>
                <DrawerContent>
                    <Flexbox
                        className={'h-full bg-gray-100'}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        Drawer Content
                    </Flexbox>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export const Default: Story = {
    args: {
        isOpen: false,
        setIsOpen: () => {},
        // title: 'Drawer Title',
    },
    render,
}
