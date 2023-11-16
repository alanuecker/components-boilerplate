import React from 'react';

import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { HeaderContainer } from '../../../components/HeaderContainer';
import { HeaderWrapper } from '../../../components/HeaderWrapper';

import { HeaderChildren } from './HeaderChildren';

const meta: Meta<typeof HeaderChildren> = {
  title: 'Components/Header/Header Children',
  component: HeaderChildren,
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof HeaderChildren> = ({ ...rest }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <HeaderChildren {...rest} />
    </HeaderContainer>
  </HeaderWrapper>
);

const SmallTemplate: StoryFn<typeof HeaderChildren> = ({ ...rest }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <HeaderChildren small {...rest} />
    </HeaderContainer>
  </HeaderWrapper>
);

export const Default: Story = {
  render: Template,
};

export const Small: Story = {
  render: SmallTemplate,
};
