import Flexbox from '@/components/containers/flexbox/Flexbox'
import { Meta, StoryObj } from '@storybook/react'
import { clsx } from 'clsx'

const meta = {
    title: 'Containers/Flexbox',
    component: Flexbox,
    argTypes: {},
    tags: ['autodocs'],
} satisfies Meta<typeof Flexbox>

export default meta

type Story = StoryObj<typeof meta>

const render = (args: any) => {
    const itemClasses = clsx(
        'flex h-14 w-36 shrink items-center justify-center rounded-md bg-lime-600 font-medium text-white shadow-lg'
    )
    return (
        <Flexbox {...args}>
            <div className={itemClasses}>01</div>
            <div className={itemClasses}>02</div>
            <div className={itemClasses}>03</div>
        </Flexbox>
    )
}

export const Default: Story = {
    args: {
        className: 'bg-lime-300',
    },
    render,
}
