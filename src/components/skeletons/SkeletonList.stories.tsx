import { Meta, StoryObj } from '@storybook/react'
import SkeletonList from '@/components/skeletons/SkeletonList'

const meta = {
    title: 'Progress/SkeletonList',
    component: SkeletonList,
} satisfies Meta<typeof SkeletonList>

export default meta

type Story = StoryObj<typeof meta>

const render = (args: any) => <SkeletonList {...args} />

export const Default: Story = {
    args: {},
    render,
}
