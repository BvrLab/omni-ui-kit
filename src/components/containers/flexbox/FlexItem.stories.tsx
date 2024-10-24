import { Meta, StoryObj } from '@storybook/react'
import { clsx } from 'clsx'
import Flexbox from '@/components/containers/flexbox/Flexbox'
import FlexItem from '@/components/containers/flexbox/FlexItem'

const meta = {
    title: 'Containers/FlexItem',
    component: FlexItem,
    argTypes: {},
    tags: ['autodocs'],
} satisfies Meta<typeof FlexItem>

export default meta

type Story = StoryObj<typeof meta>

const render = (args: any) => {
    return (
        <Flexbox wrap={false} className={'bg-teal-600'}>
            <FlexItem {...args}>01</FlexItem>
            <FlexItem {...args}>02</FlexItem>
            <FlexItem {...args} order={'first'}>
                03
            </FlexItem>
        </Flexbox>
    )
}

export const Default: Story = {
    args: {
        className:
            'h-14 w-36 rounded-md bg-lime-600 font-medium text-white shadow-lg',
    },
    render,
}
