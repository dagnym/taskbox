
import React from 'react';

import Task from './Task';

export default {
  component: Task,
  title: 'Task',
};

const Template = args => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};

const longTitleString = "This task's title/name is ridiculously large and in fact I think it will probably go beyond the borders of what our task is able to display on the screen."

export const LongTitle = Template.bind({});
LongTitle.args = {
  task: {
    ...Default.args.task,
    title: longTitleString,
  },
};