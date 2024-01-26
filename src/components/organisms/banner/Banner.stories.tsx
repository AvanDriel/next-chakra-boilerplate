import type { Meta, StoryObj } from '@storybook/react'
import { Banner } from './'

const meta: Meta<typeof Banner> = {
  title: 'Components/Organisms/Banner',
  component: Banner,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
