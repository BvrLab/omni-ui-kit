import SkeletonText from '@/components/skeletons/SkeletonText'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'Progress/SkeletonText',
    component: SkeletonText,
} satisfies Meta<typeof SkeletonText>

export default meta

type Story = StoryObj<typeof meta>

const render = (args: any) => <SkeletonText {...args} />

export const Default: Story = {
    args: {},
    render,
}
