import { Meta, Story } from "@storybook/react";
import { PostCard, PostCardProps } from ".";

export default {
  title: 'PostCard',
  component: PostCard,

} as Meta

export const Primary: Story<PostCardProps> = (args) => (
  <div style={{ maxWidth: '36rem' }}>
    <PostCard {...args} />
  </div>
);
