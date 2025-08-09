import type { Task } from '@interfaces';

export const sampleTasks: Record<string, Task> = {
  '31b37541-c500-4a57-81ca-d37611835aa6': {
    id: '31b37541-c500-4a57-81ca-d37611835aa6',
    title: 'Create a global store',
    status: 'done',
  },
  '4ba87114-c914-4ca1-bbf7-ba8b7415f1f4': {
    id: '4ba87114-c914-4ca1-bbf7-ba8b7415f1f4',
    title: 'Add actions to the store',
    status: 'done',
  },
  '3d593120-3d2e-460c-b622-57d85ab1ef81': {
    id: '3d593120-3d2e-460c-b622-57d85ab1ef81',
    title: 'Use the store in components',
    status: 'done',
  },
  'be14f179-e55f-4491-a454-09872ab210b8': {
    id: 'be14f179-e55f-4491-a454-09872ab210b8',
    title: 'Integrate devtools middleware',
    status: 'done',
  },
  '7c8ca57a-3cfb-48da-b09a-06ad9d134ece': {
    id: '7c8ca57a-3cfb-48da-b09a-06ad9d134ece',
    title: 'Create a custom middleware',
    status: 'pending',
  },
  '12fd4efa-0b55-4304-b285-3635a483565a': {
    id: '12fd4efa-0b55-4304-b285-3635a483565a',
    title: 'Add state persistence',
    status: 'pending',
  },
  '2143c9c0-2764-4883-a9ed-ac0bd70ffa71': {
    id: '2143c9c0-2764-4883-a9ed-ac0bd70ffa71',
    title: 'Create a derived/computed value',
    status: 'pending',
  },
  '16f65e60-eea8-4dfa-a84a-97572a474afb': {
    id: '16f65e60-eea8-4dfa-a84a-97572a474afb',
    title: 'Combine multiple stores',
    status: 'pending',
  },
  'aecc1807-12b2-41b7-b4e4-b9209d9767e1': {
    id: 'aecc1807-12b2-41b7-b4e4-b9209d9767e1',
    title: 'Write unit tests for the store',
    status: 'pending',
  },
};
