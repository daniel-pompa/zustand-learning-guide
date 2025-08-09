import { create, StateCreator } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { v4 as uuid } from 'uuid';
import type { Task, TaskStatus } from '@interfaces';
import { sampleTasks } from '@data';

interface TaskState {
  tasks: Record<string, Task>;
}

interface TaskActions {
  addTask: (title: string, status: TaskStatus) => void;
  updateTaskStatus: (taskId: string, newStatus: TaskStatus) => void;
  totalTasks: () => number;
}

const createTaskStore: StateCreator<
  TaskState & TaskActions,
  [['zustand/immer', never]]
> = set => ({
  tasks: sampleTasks,

  addTask: (title, status) => {
    const newTask = { id: uuid(), title, status };
    set(state => {
      state.tasks[newTask.id] = newTask;
    });
  },

  updateTaskStatus: (taskId, newStatus) => {
    set(state => {
      if (state.tasks[taskId]) {
        state.tasks[taskId].status = newStatus;
      }
    });
  },

  totalTasks: () => {
    return Object.keys(useTaskStore.getState().tasks).length;
  },
});

export const useTaskStore = create<TaskState & TaskActions>()(
  immer(
    devtools(
      persist(createTaskStore, {
        name: 'task-storage',
      })
    )
  )
);
