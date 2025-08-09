import type { Task, TaskStatus } from '@interfaces';

// Filter tasks by their status
export const filterTasksByStatus = (
  tasks: Record<string, Task>,
  status: TaskStatus
): Task[] => {
  return Object.values(tasks).filter(task => task.status === status);
};
