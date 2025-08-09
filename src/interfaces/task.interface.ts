export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
}

export type TaskStatus = 'pending' | 'inProgress' | 'done';

export type TaskCounts = {
  total: number;
  pending: number;
  inProgress: number;
  done: number;
};
