import Modal, { ModalButtonGroup } from '@/components/dialogs/Modal'
import { Meta, StoryObj } from '@storybook/react'
import Button from '@/components/buttons/Button'
import { useState } from 'react'

const meta = {
    title: 'Overlay/Modal',
    component: Modal,
    argTypes: {},
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Modal>

export default meta

type Story = StoryObj<typeof meta>

const render = (args: any) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(true)
    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
            <Modal
                onClickSecondary={() => setIsOpen(false)}
                onClickPrimary={() => {
                    setIsOpen(false)
                    alert('Primary CTA clicked')
                }}
                {...args}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
        </>
    )
}

export const Default: Story = {
    args: {
        isOpen: false,
        setIsOpen: () => {},
        title: 'Modal Title',
        titlePlacement: 'left',
        description:
            'This is the description texts This is the description texts This is the description texts This is the description texts This is the description texts This is the description texts',
    },
    render,
}

export const ModalWithButtons: Story = {
    args: {
        isOpen: false,
        setIsOpen: () => {},
        title: 'Modal With Buttons',
        titlePlacement: 'left',
        description:
            'This is a modal with button groups using the ModalButtonGroup component',
    },
    render: (args: any) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [isOpen, setIsOpen] = useState(true)
        return (
            <>
                <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
                <Modal
                    onClickSecondary={() => setIsOpen(false)}
                    onClickPrimary={() => {
                        setIsOpen(false)
                        alert('Primary CTA clicked')
                    }}
                    {...args}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                >
                    <ModalButtonGroup>
                        <Button
                            variant={'primary'}
                            size={'md'}
                            onClick={() => alert('Primary button clicked')}
                        >
                            Primary CTA
                        </Button>
                        <Button
                            variant={'secondary'}
                            size={'md'}
                            onClick={() => setIsOpen(false)}
                        >
                            Close
                        </Button>
                    </ModalButtonGroup>
                </Modal>
            </>
        )
    },
}
