import type { TaskStatus } from '@interfaces';

// Tailwind CSS class mapping based on task status
export const taskColorStyles = {
  pending: {
    header: 'bg-amber-100 text-amber-700',
    hoverButton: 'hover:bg-amber-200 hover:text-amber-800',
    dragOver: 'bg-amber-50/80 border-amber-300',
    taskCard: 'text-amber-700 border-amber-400 bg-amber-50 hover:bg-amber-100',
    emptyState: 'text-amber-500 bg-amber-100/30 border-amber-300',
  },
  inProgress: {
    header: 'bg-indigo-100 text-indigo-700',
    hoverButton: 'hover:bg-indigo-200 hover:text-indigo-800',
    dragOver: 'bg-indigo-50/80 border-indigo-300',
    taskCard: 'text-indigo-700 border-indigo-400 bg-indigo-50 hover:bg-indigo-100',
    emptyState: 'text-indigo-500 bg-blue-100/30 border-indigo-300',
  },
  done: {
    header: 'bg-emerald-100 text-emerald-700',
    hoverButton: 'hover:bg-emerald-200 hover:text-emerald-800',
    dragOver: 'bg-emerald-50/80 border-emerald-300',
    taskCard: 'text-emerald-700 border-emerald-400 bg-emerald-50 hover:bg-emerald-100',
    emptyState: 'text-emerald-500 bg-emerald-100/30 border-emerald-300',
  },
} satisfies Record<TaskStatus, Record<string, string>>;
